import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
function Nav()  {
    const container = useRef();

    useGSAP(() => {
    gsap.from(container.current, {
      y: -10,
      opacity: 0, // start from invisible
      duration: 1.4,
      ease: "power2.inOut",
    });
  }, []); 
     return (
        <div className="h-20 text-red-500">
            <div ref={container}  className="h-20 text-red-500 flex items-center justify-between ml-3"> DECORE
                <div className="flex-end justify-end">
                    <ul className="flex justify-end space-x-9 mr-9 text-lg"> 
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">World</a></li>
                        <li><a href="#">Main</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav;