

const Customers = () => {
    return (
      <div className="">

        <h2 className="text-2xl lg:text-5xl font-bold text-center my-10 lg:my-16">Who Are Our Customers</h2>
          <div className="bg-[#FFF6E4] pt-16 pb-10 h-full lg:h-[75vh] ">
            
            <div className="lg:max-w-[700px] mx-auto">
                <h2 className="text-center text-xl font-Montserrat font-bold mb-4 ">OUR TOP CUSTOMERS</h2>
                <h2 className="text-center mb-5 text-4xl font-bold font-Montserrat">Learn from high-performing teams</h2>
                <p className="mx-10 text-[888B93] mt-3  text-center">Teams all over the world use Hive to move faster. We’re proud to help non-profits, universities, hospitals, creative teams, and some of your favorite consumer companies stay on top of their work. Every team works differently and uses Hive in their own unique way to streamline their processes.</p>
            </div>



         
            <div className="flex lg:flex-row flex-col gap-10 ml-10 mr-16 mt-16 justify-center">

                <div className="flex gap-5 lg:gap-10 items-center justify-center bg-white lg:flex-row flex-col lg:px-9 lg:py-7 rounded-lg  p-5">
                    <div className="">
                    <img className="w-[100px] lg:w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image.png"></img>
                    </div>

                    <div className=" lg:max-w-[270px]">
                        <h2 className="font-bold font-Montserrat text-center">Alex Reynolds</h2>
                        <p className="mb-3 font-Montserrat text-center">Marketing Manager</p>
                        <p className="text-center">“Hive was and is the only product that that delivers exactly the tools and features a fast-moving marketing team like ours needs.”</p>
                    </div>
                </div>
            
                <div className="flex gap-5 lg:gap-10 items-center justify-center bg-white lg:flex-row flex-col lg:px-9 lg:py-7 rounded-lg  p-5">
                    <div>
                    <img className="w-[100px] lg:w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image-1.png"></img>
                    </div>

                    <div className="lg:max-w-[270px]">
                        <h2 className="font-semibold font-Montserrat text-center">Olivia Patel</h2>
                        <p className="mb-3 font-Montserrat text-center">Entrepreneur</p>
                        <p className="text-center">“Hive has been a complete game changer – a year ago work from home would have been much more difficult…”</p>
                    </div>
                </div>
            
                <div className="flex gap-5 lg:gap-10 items-center justify-center bg-white lg:flex-row flex-col lg:px-9 lg:py-7 rounded-lg p-5">
                    <div>
                    <img className="w-[100px] lg:w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image-2.png"></img>
                    </div>

                    <div className=" lg:max-w-[270px]">
                        <h2 className="font-semibold font-Montserrat text-center">Sarah Thompson</h2>
                        <p className="mb-3 font-Montserrat text-center">Operations Manager</p>
                        <p className="text-center">“Forms and templates in Hive have helped us take on new business at a rapid pace.”</p>
                    </div>
                </div>
            

            </div>

            
        </div>
      </div>
    );
};

export default Customers;