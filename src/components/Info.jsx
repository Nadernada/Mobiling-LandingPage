import { styles } from "../assets/styles"

const Info = () => {
  return (
    <section className={`${styles.mainLayout} bg-white pb-[35px]`}>
      <h3 className="text-[24px] lg:text-[40px] font-medium text-dark leading-[30px] lg:leading-[50px] capitalize">mobiling social</h3>
      <div className="gradient w-full h-[600px] lg:h-[400px] flex rounded-[30px] bg-mid p-[20px] lg:p-[30px] justify-center items-center mt-[32px] relative ">
        <div className="w-full h-full flex flex-col justify-end items-start border-dashed border-2 border-white px-[20px] z-10">
          <h4 className="text-[20px] lg:text-[32px] font-medium text-light leading-[26px] lg:leading-[40px]">Information on data processing</h4>
          <p className="w-full lg:w-[65%] text-[16px] font-normal text-light leading-[20px] mt-[18px]">On our website we provide content from Storystream. To view this content, you must agree to the data processing by Storystream.</p>
          <div className="flex flex-col lg:flex-row items-center md:items-start mt-[24px] mb-[42px] gap-[10px] lg:gap-[28px]">
            <button className="bg-dark max-md:w-full hover:bg-light hover:text-dark py-[12px] px-[20px] text-[14px] lg:text-[18px] font-normal text-light leading-[20px] lg:leading[22.5px] text-center capitalize transition-colors">{'>'} agree</button>
            <button className="bg-dark hover:bg-light py-[12px] px-[20px] text-[14px] lg:text-[18px] font-normal text-light hover:text-dark leading-[20px] lg:leading[22.5px] text-center capitalize transition-colors">{'>'} Information on data privacy</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info