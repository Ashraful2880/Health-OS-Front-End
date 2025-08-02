import React from "react";
import { useAlert } from "react-alert";
import Label from "../../../Shared/Input/Label";
import { MdAdminPanelSettings } from "react-icons/md";
import CustomInput from "../../../Shared/Input/CustomInput";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";
import { useMakeAdminMutation } from "../../../../features/userSlice/userSlice";

const MakeAdmin = () => {
  const alert = useAlert();
  const [adminEmail, setAdminEmail] = React.useState();
  const [makeAdmin, { isLoading }] = useMakeAdminMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = { email: adminEmail };
    try {
      await makeAdmin(admin).unwrap();
      alert.success("Admin Added Successful");
    } catch (error) {
      alert.error(
        error?.data?.message || error?.message || "Failed to make admin"
      );
    }
    e.target.reset();
  };

  return (
    <div className="bg-shape h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <MdAdminPanelSettings className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Make Admin</h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white lg:pb-14 pb-6">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Enter an Email
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-[#2563eb]"> Make An Admin </span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-4 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Label
                valueFor="email"
                isRequired={true}
                title="Enter Email Address"
              />
              <CustomInput
                type="email"
                value={adminEmail}
                placeholder="Enter a Email to make an admin"
                onChange={(e) => setAdminEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center w-full px-3">
            <SharedButton
              type="submit"
              // width="w-full"
              title="Make Admin"
              variant="primary"
              loading={isLoading}
              disabled={isLoading}
              loadingText="Making Admin..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
