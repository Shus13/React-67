import { GoBackButton } from "../../../components/ui/button/BackButton";


export default function CmsUserCreate() {

  
  return (
    <>
      <section className="w-full flex flex-col gap-5">

      <div className="flex w-full justify-between border-b-2 border-b-teal-900/30 pb-5">
        <h1 className="text-5xl font-semibold text-shadow-lg">
          User Listing
        </h1>

        <div className="flex gap-3 items-center">
          <GoBackButton>Go to user listing</GoBackButton>
        </div>
      </div>
    </section> 
    </>
  );
}
