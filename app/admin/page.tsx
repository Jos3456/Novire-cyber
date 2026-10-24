
"use client";

import { useState } from "react";

const initialServices = [
  { name: "Internet Access", price: "50", description: "Fast and reliable internet browsing" },
  { name: "Printing", price: "10", description: "Document printing services" },
  { name: "Photocopying", price: "5", description: "Quick and affordable photocopying" },
  { name: "Computer Services", price: "100", description: "Computer support and assistance" },
];

type Service = {
  name: string;
  price: string;
  description: string;
};

export default function AdminPage() {
  const [active, setActive] = useState("Overview");
  const [services, setServices] = useState<Service[]>(initialServices);
  const [businessName, setBusinessName] = useState("Novire Internet Cyber Cafe");
  const [phone, setPhone] = useState("0700688183");
  const [email, setEmail] = useState("novirecyber@gmail.com");
  const [notice, setNotice] = useState("");
  const [editing, setEditing] = useState<number | null>(null);
  const [draft, setDraft] = useState<Service>({
    name: "",
    price: "",
    description: "",
  });

  const menu = [
    { name: "Overview", icon: "▦" },
    { name: "Services & Prices", icon: "▤" },
    { name: "Business Details", icon: "◎" },
  ];

  function saveService() {
    if (!draft.name.trim() || !draft.price.trim()) {
      setNotice("Please enter a service name and price.");
      return;
    }

    if (editing === null) {
      setServices([...services, draft]);
    } else {
      setServices(services.map((service, index) =>
        index === editing ? draft : service
      ));
    }

    setDraft({ name: "", price: "", description: "" });
    setEditing(null);
    setNotice("Service updated in this session. Permanent saving will be connected next.");
  }

  function editService(index: number) {
    setDraft({ ...services[index] });
    setEditing(index);
    setNotice("");
  }

  function deleteService(index: number) {
    if (window.confirm("Remove this service from the current dashboard?")) {
      setServices(services.filter((_, i) => i !== index));
      setNotice("Service removed from this session only.");
    }
  }

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5eaf2",
    borderRadius: "14px",
    padding: "22px",
  };

  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box" as const,
    padding: "11px 12px",
    border: "1px solid #d7dfeb",
    borderRadius: "8px",
    marginTop: "7px",
    marginBottom: "16px",
    fontSize: "14px",
    background: "#fff",
    color: "#172b4d",
  };

  const primaryButton = {
    background: "#1769e0",
    color: "#fff",
    border: "none",
    padding: "11px 16px",
    borderRadius: "8px",
    fontWeight: 600 as const,
    cursor: "pointer",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f7fc",
      color: "#172b4d",
      fontFamily: "Arial, sans-serif",
    }}>
      <aside style={{
        width: "235px",
        background: "#102b55",
        color: "#fff",
        position: "fixed",
        inset: "0 auto 0 0",
        padding: "28px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}>
        <div style={{ padding: "0 12px 30px", borderBottom: "1px solid #ffffff25" }}>
          <div style={{ fontSize: "25px", fontWeight: 800, letterSpacing: "2px" }}>
            NOVIRE
          </div>
          <div style={{ fontSize: "12px", color: "#bdcde8", marginTop: "6px" }}>
            INTERNET CYBER CAFE
          </div>
        </div>

        <div style={{
          color: "#9db4d7",
          fontSize: "11px",
          fontWeight: 700,
          margin: "28px 12px 12px",
          letterSpacing: "1px",
        }}>
          ADMIN MENU
        </div>

        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => { setActive(item.name); setNotice(""); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              textAlign: "left",
              border: "none",
              borderRadius: "9px",
              padding: "13px 12px",
              marginBottom: "7px",
              color: active === item.name ? "#fff" : "#c4d2e8",
              background: active === item.name ? "#1769e0" : "transparent",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <span style={{ fontSize: "19px" }}>{item.icon}</span>
            {item.name}
          </button>
        ))}

        <div style={{
          marginTop: "auto",
          padding: "15px 12px",
          borderTop: "1px solid #ffffff25",
          color: "#bdcde8",
          fontSize: "12px",
          lineHeight: 1.7,
        }}>
          <div style={{ color: "#fff", fontWeight: 700 }}>Admin workspace</div>
          Novire website management
        </div>
      </aside>

      <main style={{ marginLeft: "235px", padding: "30px", minWidth: 0 }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}>
          <div>
            <div style={{ color: "#74839b", fontSize: "13px", marginBottom: "7px" }}>
              NOVIRE / ADMIN
            </div>
            <h1 style={{ margin: 0, fontSize: "27px" }}>{active}</h1>
            <p style={{ color: "#74839b", margin: "8px 0 0", fontSize: "14px" }}>
              Welcome to your website management area.
            </p>
          </div>
          <div style={{
            background: "#fff",
            border: "1px solid #e5eaf2",
            borderRadius: "10px",
            padding: "10px 14px",
            fontSize: "13px",
          }}>
            <span style={{ color: "#16a36a" }}>●</span> Dashboard preview
          </div>
        </header>

        {notice && (
          <div role="status" style={{
            padding: "13px 16px",
            background: "#e8f2ff",
            border: "1px solid #c9defc",
            borderRadius: "9px",
            marginBottom: "20px",
            fontSize: "14px",
          }}>
            {notice}
          </div>
        )}

        {active === "Overview" && (
          <>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "18px",
              marginBottom: "22px",
            }}>
              {[
                { label: "Listed Services", value: services.length, icon: "▤" },
                { label: "Contact Number", value: "Available", icon: "☎" },
                { label: "Website", value: "Novire", icon: "◎" },
              ].map((item) => (
                <div key={item.label} style={cardStyle}>
                  <div style={{
                    width: "42px",
                    height: "42px",
                    display: "grid",
                    placeItems: "center",
                    background: "#eaf2ff",
                    color: "#1769e0",
                    borderRadius: "10px",
                    fontSize: "22px",
                    marginBottom: "18px",
                  }}>{item.icon}</div>
                  <div style={{ fontSize: "13px", color: "#74839b" }}>{item.label}</div>
                  <div style={{ fontSize: "25px", fontWeight: 700, marginTop: "8px" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <section style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "18px" }}>Quick actions</h2>
              <p style={{ color: "#74839b", fontSize: "14px", lineHeight: 1.7 }}>
                Manage the services and business information shown on your Novire website.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
                <button style={primaryButton} onClick={() => setActive("Services & Prices")}>
                  Manage services
                </button>
                <button
                  style={{ ...primaryButton, background: "#eaf2ff", color: "#1769e0" }}
                  onClick={() => setActive("Business Details")}
                >
                  Edit business details
                </button>
              </div>
            </section>
          </>
        )}

        {active === "Services & Prices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px", alignItems: "start" }}>
            <section style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "18px" }}>
                {editing === null ? "Add a service" : "Edit service"}
              </h2>
              <label htmlFor="service-name">Service name</label>
              <input id="service-name" value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} placeholder="e.g. Printing" style={fieldStyle} />
              <label htmlFor="service-price">Price (KES)</label>
              <input id="service-price" type="number" min="0" value={draft.price} onChange={e => setDraft({ ...draft, price: e.target.value })} placeholder="e.g. 10" style={fieldStyle} />
              <label htmlFor="service-description">Description</label>
              <textarea id="service-description" value={draft.description} onChange={e => setDraft({ ...draft, description: e.target.value })} placeholder="Describe this service" rows={3} style={{ ...fieldStyle, resize: "vertical" }} />
              <button onClick={saveService} style={primaryButton}>
                {editing === null ? "Add service" : "Save changes"}
              </button>
              {editing !== null && (
                <button onClick={() => { setEditing(null); setDraft({ name: "", price: "", description: "" }); }} style={{ ...primaryButton, background: "#eaf2ff", color: "#1769e0", marginLeft: "8px" }}>
                  Cancel
                </button>
              )}
            </section>

            <section style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "18px" }}>Current services</h2>
              {services.map((service, index) => (
                <div key={`${service.name}-${index}`} style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #edf0f5",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <strong>{service.name}</strong>
                    <strong style={{ color: "#1769e0", whiteSpace: "nowrap" }}>KES {service.price}</strong>
                  </div>
                  <p style={{ color: "#74839b", fontSize: "13px", lineHeight: 1.5, margin: "7px 0 12px" }}>
                    {service.description}
                  </p>
                  <button onClick={() => editService(index)} style={{ ...primaryButton, padding: "7px 10px", fontSize: "12px", background: "#eaf2ff", color: "#1769e0", marginRight: "8px" }}>
                    Edit
                  </button>
                  <button onClick={() => deleteService(index)} style={{ ...primaryButton, padding: "7px 10px", fontSize: "12px", background: "#fff0f0", color: "#c53030" }}>
                    Delete
                  </button>
                </div>
              ))}
            </section>
          </div>
        )}

        {active === "Business Details" && (
          <section style={{ ...cardStyle, maxWidth: "650px" }}>
            <h2 style={{ marginTop: 0, fontSize: "18px" }}>Business information</h2>
            <p style={{ color: "#74839b", fontSize: "14px", lineHeight: 1.6 }}>
              Update the details for your business. These edits currently remain in this browser session only.
            </p>
            <form onSubmit={e => {
              e.preventDefault();
              setNotice("Business details updated in this session. Permanent saving will be connected next.");
            }}>
              <label htmlFor="business-name">Business name</label>
              <input id="business-name" value={businessName} onChange={e => setBusinessName(e.target.value)} required style={fieldStyle} />
              <label htmlFor="business-phone">Main phone number</label>
              <input id="business-phone" value={phone} onChange={e => setPhone(e.target.value)} required style={fieldStyle} />
              <label htmlFor="business-email">Business email</label>
              <input id="business-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required style={fieldStyle} />
              <button type="submit" style={primaryButton}>Save details</button>
            </form>
            <div style={{ marginTop: "25px", padding: "16px", background: "#f4f7fc", borderRadius: "9px", fontSize: "13px", lineHeight: 1.8 }}>
              <strong>Business preview</strong><br />
              {businessName}<br />
              {phone}<br />
              {email}<br />
              Acacia Building, Room 031, Milele Centre, Kitengela, Kenya
            </div>
          </section>
        )}

        <footer style={{ color: "#8996aa", fontSize: "12px", marginTop: "35px", paddingBottom: "15px" }}>
          © 2026 Novire Internet Cyber Cafe · Admin workspacess
        </footer>
      </main>
    </div>
  );
}
