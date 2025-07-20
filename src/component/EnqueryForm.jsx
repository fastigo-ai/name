import React from 'react';
import { useForm } from 'react-hook-form';

const EnqueryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.interest || data.interest.length === 0) {
      alert('Please select at least one area of interest.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', 'fda635c8-fa6e-4cfe-a139-14b5a85bfac0');
    formData.append('subject', 'New Enquiry Form Submission');
    formData.append('Full Name', data.fullName);
    formData.append('Company Name', data.company);
    formData.append('Email', data.email);
    formData.append('WhatsApp', data.whatsapp);
    formData.append('Area of Interest', data.interest.join(', '));
    formData.append('Other', data.other || '');
    formData.append('Message', data.message || '');

    if (data.file && data.file.length > 0) {
      formData.append('file', data.file[0]);
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        reset();
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-900">Enquiry Form</h2>

      {/* Full Name */}
      <div>
        <input
          {...register('fullName', { required: true })}
          placeholder="Full Name *"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500 mt-1">Full Name is required</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <input
          {...register('company', { required: true })}
          placeholder="Company Name *"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        />
        {errors.company && (
          <p className="text-sm text-red-500 mt-1">Company Name is required</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email Address *"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">Email is required</p>
        )}
      </div>

      {/* WhatsApp Number */}
      <div>
        <input
          type="text"
          {...register('whatsapp', { required: true })}
          placeholder="Mobile / WhatsApp Number *"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        />
        {errors.whatsapp && (
          <p className="text-sm text-red-500 mt-1">Mobile number is required</p>
        )}
      </div>

      {/* Area of Interest */}
      <div>
        <label className="font-semibold block mb-2">Area of Interest *</label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'PCB Testing Fixtures',
            'Special Purpose Machines (SPMs)',
            'Testing & Measuring Instruments',
            'SMT Consumables & Spare Parts',
          ].map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input type="checkbox" value={item} {...register('interest')} />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Other Interest */}
      <div>
        <input
          type="text"
          {...register('other')}
          placeholder="Other Area of Interest"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <label className="font-semibold block mb-2">Your Requirements / Message</label>
        <textarea
          {...register('message')}
          placeholder="Type here..."
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* File Upload */}
      <div>
        <label className="font-semibold block mb-2">Upload File (Optional)</label>
        <input
          type="file"
          {...register('file')}
          className="block w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
};

export default EnqueryForm;
