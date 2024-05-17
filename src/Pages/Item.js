import React from 'react'
import "./Item.css"
import gsap from 'gsap';
import { useRef } from 'react';
import { EasePack } from 'gsap/all';
import { Button } from '../Component/Button';
const Item = (props) => {


    const scrollRef = useRef(null);
    const tl = gsap.timeline();
    const scrollLeft = () => {
        if (scrollRef.current) {
            const currentScrollLeft = scrollRef.current.scrollLeft;
            tl.to(scrollRef.current, { scrollLeft: currentScrollLeft - 200, duration: 0.5, ease: "easein" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const currentScrollLeft = scrollRef.current.scrollLeft;
            tl.to(scrollRef.current, { scrollLeft: currentScrollLeft + 200, duration: 0.5, ease: "power2.inOut" });
        }
    };
    return (
        <>
            <div className=' flex  justify-center align-middle flex-row w-full h-96 gap-2'>

                <div className='w-20 h-1/2  flex  my-auto justify-center align-middle  ' >

                    {/* <button className='rounded-md border-red-200' onClick={scrollLeft}>Scroll Left</button> */}

                    <Button label={null} className={"w-full"} onClick={scrollLeft} />


                </div>
                <div className='flex-shrink  bg-red-500 flex flex-row  flex-nowrap overflow-x-auto scrollbar-hidden shadow-lg' ref={scrollRef}  >
                    <img src="https://i.pinimg.com/736x/9b/00/c3/9b00c35d60619273225d1ca435018084.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/4d/1a/7c/4d1a7cf33c6c133c5ec70c0ba6e1c4c5.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/4d/1a/7c/4d1a7cf33c6c133c5ec70c0ba6e1c4c5.jpg" alt="" />
                    <img src="https://i.pinimg.com/564x/4d/1a/7c/4d1a7cf33c6c133c5ec70c0ba6e1c4c5.jpg" alt="" />
                </div>

                <div className='w-20 h-1/2  flex my-auto align-middle justify-center ' >
                    {/* <button className="rounded-t-md" onClick={scrollRight}>Scroll Right</button> */}
                    <Button label={null} onClick={scrollRight} />
                </div>

            </div>

            <div className='h-auto p-4   ' >

                <div className='h-20 mt-2 flex align-bottom justify-between p-2  px-10 text-[2rem] font-medium bg-stone-100   rounded-md ' >
                    <h1>Kaiiu Fast</h1>  <h1 className='text-[1.3rem] flex justify-center align-middle' >1231</h1>
                </div>
                {/* <div className='h-20 mt-2 bg-cyan-200 rounded-md shadow-lg  text-[2rem] p-5  px-10 py-auto text-black  '  >
                    23542
                </div> */}
                <div className='h-auto text-xl mt-2  bg-yellow-200 rounded-md shadow-xl px-10 py-[4rem] font-medium font p-4 texti ' >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dolorum ullam itaque, dicta placeat nemo velit! Non beatae facere possimus! Hic amet corporis quis, eveniet soluta vitae odit voluptatum expedita.
                </div>
                <div className=' w-10/12 mx-auto  h-auto max-h-auto px-10  bg-slate-100 rounded-lg mt-[-3rem] shadow-2xl p-10
                ' >
                    <div className='h-auto py-4 text-center text-3xl' >Features</div>
                    <ul className='text-3xl px-14 list-disc'   >
                        <li className='text-[1.3rem] ' >ssff</li>
                        <li className='text-[1.3rem] ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente quaerat quos at corrupti officia ab animi id non autem doloremque vitae excepturi esse, quam suscipit alias odit. Corporis, provident? ssff</li>
                        <li className='text-[1.3rem] ' >ssff</li>
                        <li className='text-[1.3rem] ' >ssff</li>

                    </ul>


                </div>

                <div className='h-40 mt-2 bg-slate-700 rounded-md p-10'>

                    <div className='h-10 text-center' >kjhlkh</div>
                    <div className='flex justify-around align-middle' >
                        <button className='bg-white' >Buy</button>
                        <button>Buy</button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Item