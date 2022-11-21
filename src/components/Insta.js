import { useEffect } from "react";

function Insta(){
   useEffect(() => {
      const externalScript = document.createElement('script');
      externalScript.src = "//www.instagram.com/embed.js";
      externalScript.async = true;
      document.head.append(externalScript);

      return() => {
          externalScript.remove();
      };
  },[])
   return(
      <div>
         <blockquote style = {{width:'400px'}} className='instagram-media' data-instgrm-version='14'>

         <a href='https://www.instagram.com/p/Cf_zag3uk3P/?utm_source=ig_web_copy_link' ></a>

         </blockquote>
         {/* <script src="//www.instagram.com/embed.js"></script> */}
      </div>
   )
}

export default Insta;