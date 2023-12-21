

const Customers = () => {
    return (
        <div className="bg-[#FFF6E4] pt-10 h-[65vh] my-20">
            
            
            <div className="max-w-[700px] mx-auto">
                <h2 className="text-center font-Montserrat font-semibold mb-4 ">CUSTOMERS</h2>
                <h2 className="text-center mb-5 text-4xl font-bold font-Montserrat">Learn from high-performing teams</h2>
                <p className="text-[888B93] mt-3  text-center">Teams all over the world use Hive to move faster. We’re proud to help non-profits, universities, hospitals, creative teams, and some of your favorite consumer companies stay on top of their work. Every team works differently and uses Hive in their own unique way to streamline their processes.</p>
            </div>



         
            <div className="flex gap-10 mt-16 justify-center">

                <div className="flex gap-10 items-center justify-center bg-white px-9 py-7 rounded-lg">
                    <div>
                    <img className="w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image.png"></img>
                    </div>

                    <div className="max-w-[270px]">
                        <h2 className="font-bold font-Montserrat ">Alex Reynolds</h2>
                        <p className="mb-3 font-Montserrat">Marketing Manager</p>
                        <p>“Hive was and is the only product that that delivers exactly the tools and features a fast-moving marketing team like ours needs.”</p>
                    </div>
                </div>
            
                <div className="flex gap-10 items-center justify-center bg-white px-9 py-7 rounded-lg">
                    <div>
                    <img className="w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image-1.png"></img>
                    </div>

                    <div className="max-w-[270px]">
                        <h2 className="font-semibold font-Montserrat ">Olivia Patel</h2>
                        <p className="mb-3 font-Montserrat">Entrepreneur</p>
                        <p>“Hive has been a complete game changer – a year ago work from home would have been much more difficult…”</p>
                    </div>
                </div>
            
                <div className="flex gap-10 items-center justify-center bg-white px-9 py-7 rounded-lg">
                    <div>
                    <img className="w-[200px]" src="https://hive.com/wp-content/uploads/2022/05/Image-2.png"></img>
                    </div>

                    <div className="max-w-[270px]">
                        <h2 className="font-semibold font-Montserrat">Sarah Thompson</h2>
                        <p className="mb-3 font-Montserrat">Operations Manager</p>
                        <p>“Forms and templates in Hive have helped us take on new business at a rapid pace.”</p>
                    </div>
                </div>
            

            </div>

            
        </div>
    );
};

export default Customers;