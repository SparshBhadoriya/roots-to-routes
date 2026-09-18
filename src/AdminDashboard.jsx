import { useEffect, useState } from "react";
import {
  LogOut,
  Plus,
  Map,
  Mail,
  Users,
  X,
  Save,
  Trash2,
  Pencil,
} from "lucide-react";
import { supabase } from "./lib/supabase";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [tours, setTours] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");

  const [showTourForm, setShowTourForm] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [savingTour, setSavingTour] = useState(false);
  const [tourError, setTourError] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
const [updatingEnquiry, setUpdatingEnquiry] = useState(false);

  const emptyTourForm = {
    name: "",
    slug: "",
    duration: "",
    price: "",
    starting_point: "",
    route: "",
    description: "",
    cover_image: "",
    itinerary: "",
    inclusions: "",
    exclusions: "",
    is_active: true,
  };

  const [tourForm, setTourForm] = useState(emptyTourForm);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    setLoading(true);

    const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  window.location.href = "/admin";
  return;
}

const { data: isAdmin, error: adminError } =
  await supabase.rpc("is_admin");

if (adminError || !isAdmin) {
  await supabase.auth.signOut();
  window.location.href = "/admin";
  return;
}
    setAdminEmail(user.email || "");

    const { data: tourData, error: tourError } = await supabase
      .from("tours")
      .select("*")
      .order("created_at", { ascending: false });

    if (tourError) {
      console.error("Tours error:", tourError);
    } else {
      setTours(tourData || []);
    }

    const { data: enquiryData, error: enquiryError } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (enquiryError) {
      console.error("Enquiries error:", enquiryError);
    } else {
      setEnquiries(enquiryData || []);
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin";
  };

  const handleTourChange = (e) => {
    const { name, value, type, checked } = e.target;

    setTourForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTourNameChange = (e) => {
    const value = e.target.value;

    setTourForm((previous) => ({
      ...previous,
      name: value,
      slug: editingTour ? previous.slug : createSlug(value),
    }));
  };

  const convertToArray = (text) => {
    return text
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  const convertToText = (value) => {
    if (!Array.isArray(value)) {
      return "";
    }

    return value.join("\n");
  };

  const openAddTourForm = () => {
    setEditingTour(null);
    setTourError("");
    setTourForm(emptyTourForm);
    setShowTourForm(true);
  };

  const openEditTourForm = (tour) => {
    setEditingTour(tour);
    setTourError("");

    setTourForm({
      name: tour.name || "",
      slug: tour.slug || "",
      duration: tour.duration || "",
      price: tour.price ?? "",
      starting_point: tour.starting_point || "",
      route: tour.route || "",
      description: tour.description || "",
      cover_image: tour.cover_image || "",
      itinerary: convertToText(tour.itinerary),
      inclusions: convertToText(tour.inclusions),
      exclusions: convertToText(tour.exclusions),
      is_active: tour.is_active ?? true,
    });

    setShowTourForm(true);
  };

  const closeTourForm = () => {
    if (savingTour) {
      return;
    }

    setShowTourForm(false);
    setEditingTour(null);
    setTourError("");
    setTourForm(emptyTourForm);
  };

  const handleSaveTour = async (e) => {
    e.preventDefault();

    setSavingTour(true);
    setTourError("");

    if (!tourForm.name.trim()) {
      setTourError("Tour name is required.");
      setSavingTour(false);
      return;
    }

    if (!tourForm.price) {
      setTourError("Tour price is required.");
      setSavingTour(false);
      return;
    }

    const tourData = {
      name: tourForm.name.trim(),
      slug: tourForm.slug.trim(),
      duration: tourForm.duration.trim(),
      price: Number(tourForm.price),
      starting_point: tourForm.starting_point.trim(),
      route: tourForm.route.trim(),
      description: tourForm.description.trim(),
      cover_image: tourForm.cover_image.trim(),
      itinerary: convertToArray(tourForm.itinerary),
      inclusions: convertToArray(tourForm.inclusions),
      exclusions: convertToArray(tourForm.exclusions),
      is_active: tourForm.is_active,
      updated_at: new Date().toISOString(),
    };

    let error;

    if (editingTour) {
      const result = await supabase
        .from("tours")
        .update(tourData)
        .eq("id", editingTour.id);

      error = result.error;
    } else {
      const result = await supabase
        .from("tours")
        .insert([tourData]);

      error = result.error;
    }

    if (error) {
      console.error("Save tour error:", error);
      setTourError(error.message);
      setSavingTour(false);
      return;
    }

    closeTourForm();
    setSavingTour(false);

    await loadDashboard();
  };

  const handleDeactivateTour = async (tour) => {
    const confirmed = window.confirm(
      `Are you sure you want to deactivate "${tour.name}"?`
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("tours")
      .update({
        is_active: false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", tour.id);

    if (error) {
      console.error("Deactivate tour error:", error);
      alert(error.message);
      return;
    }

    await loadDashboard();
  };

 const handleActivateTour = async (tour) => {
  const { error } = await supabase
    .from("tours")
    .update({
      is_active: true,
      updated_at: new Date().toISOString(),
    })
    .eq("id", tour.id);

  if (error) {
    console.error("Activate tour error:", error);
    alert(error.message);
    return;
  }

  await loadDashboard();
};

const handleEnquiryStatusChange = async (enquiry, newStatus) => {
  setUpdatingEnquiry(true);

  const { error } = await supabase
    .from("enquiries")
    .update({
      status: newStatus,
    })
    .eq("id", enquiry.id);

  if (error) {
    console.error("Enquiry status update error:", error);
    alert(error.message);
    setUpdatingEnquiry(false);
    return;
  }

  setSelectedEnquiry((previous) =>
    previous
      ? {
          ...previous,
          status: newStatus,
        }
      : previous
  );

  await loadDashboard();

  setUpdatingEnquiry(false);
};

const handleDeleteEnquiry = async (enquiry) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete the enquiry from "${enquiry.name}"?`
  );

  if (!confirmed) {
    return;
  }

  const { error } = await supabase
    .from("enquiries")
    .delete()
    .eq("id", enquiry.id);

  if (error) {
    console.error("Delete enquiry error:", error);
    alert(error.message);
    return;
  }

  setSelectedEnquiry(null);

  await loadDashboard();
};

return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <img
            src="/images/roots-to-routes-logo.png"
            alt="Roots to Routes"
          />

          <div>
            <strong>ROOTS TO ROUTES</strong>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <div className="dashboard-user">
          <span>{adminEmail}</span>

          <button onClick={handleLogout}>
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-heading">
          <div>
            <p className="dashboard-eyebrow">
              ROOTS TO ROUTES
            </p>

            <h1>Dashboard</h1>

            <p>
              Manage your tours and customer enquiries from one place.
            </p>
          </div>

          <button
            className="add-tour-button"
            onClick={openAddTourForm}
          >
            <Plus size={18} />
            Add New Tour
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Map size={22} />
            </div>

            <div>
              <span>Total Tours</span>
              <strong>{tours.length}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>Total Enquiries</span>
              <strong>{enquiries.length}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Users size={22} />
            </div>

            <div>
              <span>Active Tours</span>
              <strong>
                {tours.filter((tour) => tour.is_active).length}
              </strong>
            </div>
          </div>
        </div>

        {/* ADD / EDIT TOUR FORM */}
        {showTourForm && (
          <section className="tour-form-section">
            <div className="tour-form-header">
              <div>
                <p className="dashboard-eyebrow">
                  TOUR MANAGEMENT
                </p>

                <h2>
                  {editingTour ? "Edit Tour" : "Add New Tour"}
                </h2>

                <p>
                  {editingTour
                    ? "Update the details of this tour package."
                    : "Add a new package that can be displayed on the Roots to Routes website."}
                </p>
              </div>

              <button
                className="close-tour-form"
                onClick={closeTourForm}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="tour-form"
              onSubmit={handleSaveTour}
            >
              <div className="form-grid">
                <div className="form-field">
                  <label>Tour Name *</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Spiritual Escape"
                    value={tourForm.name}
                    onChange={handleTourNameChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Slug</label>

                  <input
                    type="text"
                    name="slug"
                    placeholder="spiritual-escape"
                    value={tourForm.slug}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field">
                  <label>Duration</label>

                  <input
                    type="text"
                    name="duration"
                    placeholder="3 Days / 2 Nights"
                    value={tourForm.duration}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field">
                  <label>Price *</label>

                  <input
                    type="number"
                    name="price"
                    placeholder="5999"
                    value={tourForm.price}
                    onChange={handleTourChange}
                    min="0"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Starting Point</label>

                  <input
                    type="text"
                    name="starting_point"
                    placeholder="Noida"
                    value={tourForm.starting_point}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field">
                  <label>Route</label>

                  <input
                    type="text"
                    name="route"
                    placeholder="Noida → Gajraula → Nainital → Noida"
                    value={tourForm.route}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field full-width">
                  <label>Cover Image URL</label>

                  <input
                    type="url"
                    name="cover_image"
                    placeholder="https://example.com/tour-image.jpg"
                    value={tourForm.cover_image}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field full-width">
                  <label>Description</label>

                  <textarea
                    name="description"
                    rows="4"
                    placeholder="Write a short description of this tour..."
                    value={tourForm.description}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field full-width">
                  <label>
                    Itinerary
                    <span>One item per line</span>
                  </label>

                  <textarea
                    name="itinerary"
                    rows="7"
                    placeholder={`Day 1 - Departure from Noida
Day 2 - Kainchi Dham and Jageshwar
Day 3 - Mukteshwar and Nainital`}
                    value={tourForm.itinerary}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field">
                  <label>
                    Inclusions
                    <span>One item per line</span>
                  </label>

                  <textarea
                    name="inclusions"
                    rows="7"
                    placeholder={`Private AC vehicle
Hotel stay
Breakfast
Lunch
Dinner`}
                    value={tourForm.inclusions}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-field">
                  <label>
                    Exclusions
                    <span>One item per line</span>
                  </label>

                  <textarea
                    name="exclusions"
                    rows="7"
                    placeholder={`Personal expenses
Boating charges
AC not operational in hilly areas`}
                    value={tourForm.exclusions}
                    onChange={handleTourChange}
                  />
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={tourForm.is_active}
                    onChange={handleTourChange}
                  />

                  <label htmlFor="is_active">
                    Publish this tour on the website
                  </label>
                </div>
              </div>

              {tourError && (
                <div className="tour-form-error">
                  {tourError}
                </div>
              )}

              <div className="tour-form-actions">
                <button
                  type="button"
                  className="cancel-tour-button"
                  onClick={closeTourForm}
                  disabled={savingTour}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-tour-button"
                  disabled={savingTour}
                >
                  <Save size={18} />

                  {savingTour
                    ? "Saving..."
                    : editingTour
                    ? "Update Tour"
                    : "Save Tour"}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* TOURS */}
        <section className="dashboard-section">
          <div className="section-title">
            <div>
              <h2>Your Tours</h2>

              <p>
                Manage the tour packages displayed on your website.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="dashboard-loading">
              Loading tours...
            </div>
          ) : tours.length === 0 ? (
            <div className="dashboard-empty">
              No tours found.
            </div>
          ) : (
            <div className="tour-table-wrapper">
              <table className="tour-table">
                <thead>
                  <tr>
                    <th>Tour</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {tours.map((tour) => (
                    <tr key={tour.id}>
                      <td>
                        <strong>{tour.name}</strong>
                      </td>

                      <td>
                        {tour.duration || "—"}
                      </td>

                      <td>
                        {tour.price
                          ? `₹${Number(
                              tour.price
                            ).toLocaleString("en-IN")}`
                          : "—"}
                      </td>

                      <td>
                        <span
                          className={
                            tour.is_active
                              ? "status-active"
                              : "status-inactive"
                          }
                        >
                          {tour.is_active
                            ? "Active"
                            : "Inactive"}
                        </span>
                      </td>

                      <td>
                        <div className="tour-actions">
                          <button
                            className="tour-edit-button"
                            onClick={() =>
                              openEditTourForm(tour)
                            }
                            title="Edit tour"
                          >
                            <Pencil size={15} />
                            Edit
                          </button>

                          {tour.is_active ? (
                            <button
                              className="tour-delete-button"
                              onClick={() =>
                                handleDeactivateTour(tour)
                              }
                              title="Deactivate tour"
                            >
                              <Trash2 size={15} />
                              Deactivate
                            </button>
                          ) : (
                            <button
                              className="tour-activate-button"
                              onClick={() =>
                                handleActivateTour(tour)
                              }
                              title="Activate tour"
                            >
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      {/* ENQUIRIES */}
<section className="dashboard-section">
  <div className="section-title">
    <div>
      <h2>Recent Enquiries</h2>
      <p>
        Customer enquiries received through your website.
      </p>
    </div>
  </div>

  {loading ? (
    <div className="dashboard-loading">
      Loading enquiries...
    </div>
  ) : enquiries.length === 0 ? (
    <div className="dashboard-empty">
      No enquiries yet.
    </div>
  ) : (
    <div className="enquiry-table-wrapper">
      <table className="enquiry-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Tour</th>
            <th>Travel Date</th>
            <th>Travelers</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.slice(0, 10).map((enquiry) => (
            <tr key={enquiry.id}>
              <td>
                <div className="enquiry-customer">
                  <strong>
                    {enquiry.name || "—"}
                  </strong>

                  <span>
                    {enquiry.phone || "No phone"}
                  </span>

                  {enquiry.email && (
                    <span>
                      {enquiry.email}
                    </span>
                  )}
                </div>
              </td>

              <td>
                {enquiry.tour_name || "—"}
              </td>

              <td>
                {enquiry.travel_date
                  ? new Date(
                      enquiry.travel_date
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "—"}
              </td>

              <td>
                {enquiry.travelers || "—"}
              </td>

              <td>
                <span
                  className={`status-enquiry status-${(
                    enquiry.status || "new"
                  )
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {enquiry.status || "New"}
                </span>
              </td>

              <td>
                <button
                  className="view-enquiry-button"
                  onClick={() =>
                    setSelectedEnquiry(enquiry)
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>

{/* ENQUIRY DETAILS MODAL */}
{selectedEnquiry && (
  <div
    className="enquiry-modal-backdrop"
    onClick={() => setSelectedEnquiry(null)}
  >
    <div
      className="enquiry-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="enquiry-modal-header">
        <div>
          <p className="dashboard-eyebrow">
            CUSTOMER ENQUIRY
          </p>

          <h2>
            {selectedEnquiry.name || "Customer"}
          </h2>
        </div>

        <button
          className="close-enquiry-button"
          onClick={() => setSelectedEnquiry(null)}
          type="button"
        >
          <X size={20} />
        </button>
      </div>

      <div className="enquiry-details">
        <div className="enquiry-detail">
          <span>Phone</span>
          <strong>
            {selectedEnquiry.phone || "—"}
          </strong>
        </div>

        <div className="enquiry-detail">
          <span>Email</span>
          <strong>
            {selectedEnquiry.email || "—"}
          </strong>
        </div>

        <div className="enquiry-detail">
          <span>Tour</span>
          <strong>
            {selectedEnquiry.tour_name || "—"}
          </strong>
        </div>

        <div className="enquiry-detail">
          <span>Travel Date</span>
          <strong>
            {selectedEnquiry.travel_date
              ? new Date(
                  selectedEnquiry.travel_date
                ).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : "—"}
          </strong>
        </div>

        <div className="enquiry-detail">
          <span>Travelers</span>
          <strong>
            {selectedEnquiry.travelers || "—"}
          </strong>
        </div>
      </div>

      <div className="enquiry-message">
        <span>Customer Message</span>

        <p>
          {selectedEnquiry.message ||
            "No message provided."}
        </p>
      </div>

      <div className="enquiry-status-section">
        <label>Update Status</label>

        <select
          value={selectedEnquiry.status || "New"}
          onChange={(e) =>
            handleEnquiryStatusChange(
              selectedEnquiry,
              e.target.value
            )
          }
          disabled={updatingEnquiry}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div className="enquiry-modal-actions">
                <button
          className="close-enquiry-action"
          onClick={() =>
            setSelectedEnquiry(null)
          }
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  );
}

export default AdminDashboard;