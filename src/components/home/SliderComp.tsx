import Slider from 'react-slick'

export const SliderComp = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className='mt-6'>
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 px-6 py-6 flex-col sm:flex-row sm:mt-0 mt-8'>
                    <div>
                        <div className='text-3xl font-bold leading-normal sm:text-5xl'>Shoe Shopping</div>
                        <div className='text-lg my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos, aperiam corporis commodi rem tempora laborum, porro id perspiciatis illo molestiae cupiditate nostrum accusamus dolorum sapiente blanditiis dolores? Quos, officiis!</div>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png" className='w-1/2 h-[150px] sm:h-[600px] object-contain' alt="" />
                </div>
                <div className='!flex items-center bg-gray-100 px-6 py-6 flex-col sm:flex-row sm:mt-0 mt-8'>
                    <div>
                        <div className='text-3xl font-bold leading-normal sm:text-5xl'>Shoe Shopping</div>
                        <div className='text-lg my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos, aperiam corporis commodi rem tempora laborum, porro id perspiciatis illo molestiae cupiditate nostrum accusamus dolorum sapiente blanditiis dolores? Quos, officiis!</div>
                    </div>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b452ab5-a325-4598-8f64-4fe24eaacb98/court-vision-low-next-nature-ayakkab%C4%B1s%C4%B1-JsHv6d.png" className='w-1/2 h-[150px] sm:h-[600px] object-contain' alt="" />
                </div>
            </Slider>
        </div>
    )
}
