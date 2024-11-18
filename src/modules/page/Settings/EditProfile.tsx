import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export default function EditProfile() {
  const formData = {
    fields: [
      {
        label: "Your Name",
        name: "yourName",
        type: "text",
        placeholder: "Charlene Reed",
      },
      {
        label: "User Name",
        name: "userName",
        type: "text",
        placeholder: "Charlene Reed",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "charlenereed@gmail.com",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "********",
      },
      {
        label: "Date of Birth",
        name: "dateOfBirth",
        type: "date",
        placeholder: "25 January 1990",
      },
      {
        label: "Permanent Address",
        name: "permanentAddress",
        type: "text",
        placeholder: "San Jose, California, USA",
      },
      {
        label: "Present Address",
        name: "presentAddress",
        type: "text",
        placeholder: "San Jose, California, USA",
      },
      {
        label: "Postal Code",
        name: "postalCode",
        type: "text",
        placeholder: "45962",
      },
      { label: "City", name: "city", type: "text", placeholder: "San Jose" },
      { label: "Country", name: "country", type: "text", placeholder: "USA" },
    ],
    button: { label: "Save", type: "submit" },
  };

  const validationSchema = Yup.object().shape({
    yourName: Yup.string().required("Your name is required"),
    userName: Yup.string().required("User name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    dateOfBirth: Yup.date().required("Date of birth is required").nullable(),
    permanentAddress: Yup.string().required("Permanent address is required"),
    presentAddress: Yup.string().required("Present address is required"),
    postalCode: Yup.string()
      .matches(/^\d{5}$/, "Postal code must be 5 digits")
      .required("Postal code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };
  return (
    <div className="mt-10 flex flex-col md:flex-row gap-10">
      <div className="flex-[0.2]">
        <img src="/assets/avatar.svg" className="rounded-full w-full" alt="" />
      </div>
      <div className="flex-[0.8]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6"
        >
          {formData.fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                {...register(field.name)}
                placeholder={field.placeholder}
                className={`border rounded-lg p-2 text-gray-500 focus:outline-none ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}
          <div className="invisible"></div>
          <button
            type={formData.button.type}
            className="w-[200px] ml-auto bg-black text-white rounded-lg py-2 mt-4 hover:bg-gray-800"
          >
            {formData.button.label}
          </button>
        </form>
      </div>
      {/* Add your edit profile form here */}
    </div>
  );
}
