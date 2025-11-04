
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, User, Settings, CreditCard } from "lucide-react";

export default function NewCustomerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    idNumber: "",
    address: "",
    city: "",
    gps: "",
    customerSegment: "",
    propertyType: "",
    wasteType: "",
    serviceChoice: "",
    volume: "",
    binSize: "",
    frequency: "",
    billingCycle: "",
    paymentMethod: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          📝 New Customer Application
        </h1>
        <p className="text-gray-600 text-lg">
          Please provide your details below to start your waste collection service.  
          We’ll use this information to determine routing, bin type, and billing.
        </p>
      </div>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 1️⃣ Location and Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <MapPin className="mr-2 text-green-600" /> Location & Contact Info
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input" required />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input" required />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input" />
              <input name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="National ID / Business Reg. No." className="input" />
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Street or Building Name" className="input" required />
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City / Town" className="input" required />
              <input name="gps" value={formData.gps} onChange={handleChange} placeholder="GPS or Landmark (Optional)" className="input" />
            </div>
          </div>

          {/* 2️⃣ Service Type Selection */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <Settings className="mr-2 text-green-600" /> Service Type
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <select name="customerSegment" value={formData.customerSegment} onChange={handleChange} className="input" required aria-label="Customer Segment">
                <option value="">Select Customer Segment</option>
                <option>Residential</option>
                <option>Commercial / Institutional</option>
                <option>Specialized Waste</option>
              </select>
              <input name="propertyType" value={formData.propertyType} onChange={handleChange} placeholder="Property Type (e.g. Apartment, Office, Site)" className="input" />
              <input name="wasteType" value={formData.wasteType} onChange={handleChange} placeholder="Waste Type (General, Organic, Recyclables)" className="input" />
              <select name="serviceChoice" value={formData.serviceChoice} onChange={handleChange} className="input" required aria-label="Service Choice">
                <option value="">Choose Service</option>
                <option>Scheduled Service</option>
                <option>On-Demand Service</option>
              </select>
            </div>
          </div>

          {/* 3️⃣ Waste Volume and Equipment */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <User className="mr-2 text-green-600" /> Waste Volume & Equipment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <select name="volume" value={formData.volume} onChange={handleChange} className="input" aria-label="Waste Volume">
                <option value="">Select Estimated Waste Volume</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <select name="binSize" value={formData.binSize} onChange={handleChange} className="input" aria-label="Bin Size">
                <option value="">Preferred Bin Size</option>
                <option>240L</option>
                <option>500L</option>
                <option>1100L</option>
                <option>Skip Container</option>
              </select>
              <select name="frequency" value={formData.frequency} onChange={handleChange} className="input" aria-label="Pickup Frequency">
                <option value="">Pickup Frequency</option>
                <option>Once a week</option>
                <option>Twice a week</option>
                <option>Monthly</option>
                <option>As needed</option>
              </select>
            </div>
          </div>

          {/* 4️⃣ Billing and Account Setup */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
              <CreditCard className="mr-2 text-green-600" /> Billing & Payment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <select name="billingCycle" value={formData.billingCycle} onChange={handleChange} className="input" aria-label="Billing Cycle">
                <option value="">Select Billing Cycle</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="input" aria-label="Payment Method">
                <option value="">Preferred Payment Method</option>
                <option>M-Pesa</option>
                <option>Bank Transfer</option>
                <option>Card Payment</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition"
            >
              Submit Application
            </button>
          </div>
        </motion.form>
      ) : (
        // ✅ Confirmation Section
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎉 Application Submitted!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for applying for our waste collection service. Our team will review your details and contact you within <strong>2 business days</strong>.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            Return Home
          </a>
        </motion.div>
      )}
    </div>
  );
}

/* Tailwind helper style for inputs */
const input = `
w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
focus:ring-green-500 focus:border-green-500 transition text-gray-700 placeholder-gray-400
`;
