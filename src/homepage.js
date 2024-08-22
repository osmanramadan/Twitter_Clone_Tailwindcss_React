
export default function Homepage() {

  return (
      <div className="mx-11 h-screen  h-full flex  xl:max-w-[1200px]">

        <div className="xl:w-1/4   w-20 flex flex-col text-2xl">

          <a class="active-link">
          <i class="fa-solid fa-x text-4xl"></i>
          </a>

          <nav class="mt-2 mb-3">
      
            <a class="active-link">
            <i class="fa-solid title-icon fa-house"></i>
            <span class="title-link !font-[500]">Home</span>
            </a>

            <a class="active-link">
            <i class=" fa-solid title-icon fa-hashtag"></i>
            <span class="title-link">Explore</span>
            </a>

            <a class="active-link">
            <i class="fa-solid title-icon fa-bell"></i>
            <span class="title-link">Notifications</span>
            </a>

            <a class="active-link">
            <i class="fa-solid title-icon fa-envelope"></i>
            <span class="title-link">Messages</span>
            </a>

            <a class="active-link">
            <i class="fa-solid fa-bookmark title-icon"></i>
            <span class="title-link">Bockmarks</span>
            </a>

            <a class="active-link">
            <i class="fa-solid title-icon fa-list-ul"></i>
            <span class="title-link">Lists</span>
            </a>

            <a class="active-link">
            <i class="fa-solid title-icon fa-user"></i>
            <span class="title-link">Profile</span>
            </a>

            <a class="active-link">
            <i class="fa-solid  fa-ellipsis"></i>
            <span class="title-link">More</span>
            </a>
          </nav>
          {/**************/}
            <a class="active-link !mx-0">
            <i class="fa-solid fa-feather  icon text-white"></i>
            </a>
            <span class="tweet-btn">Post</span>
          
          {/**************/}
          <div class="w-14 xl:w-full mx-auto mt-auto flex items-center  mb-3  p-2 cursor-pointer ">
          <img class="w-10 !mx-0  h-11 rounded-full"
            src="/osman.png" alt="person" />
          <div class="hidden xl:flex flex-col xl:ml-4">
           <h4 class="text-gray-800 text-white font-[500]">Osman Ramadan</h4>
           <p  class="text-gray-400 text-xl">@0smanramadan</p>
          </div>
          <i class="fa-solid  fa-ellipsis hidden xl:flex items-center xl:ml-5 text-white"></i>
          </div>

        </div>
        <div class="m-7 flex items-center h-full bg-[#111111]">
        <span class="h-full w-px bg-[#2F3336]"></span>
        </div>




        {/* to do */}
        <div className="xl:w-1/2   w-full  flex flex-col ">098765</div>
        <div className="xl:w-[30%] hidden  flex flex-col">osmanmamd</div>

      </div>
  )
}


// sm (Small devices):  640px  and  up
// md (Medium devices): 768px and up
// lg (Large devices):  1024px and up
// xl (Extra large devices): 1280px and up
// 2xl (2X large devices):   1536px   and up


// export default function Homepage() {

//   return (
//       <div className="container  bg-dim-900   mx-auto h-screen  h-full flex  xl:max-w-[1200px]">

//         <div className="xl:w-1/4 w-20 flex flex-col text-2xl">
//           <a class="active-link">
//           <i class="fa-brands fa-twitter text-blue-400 text-5xl"></i>
//           </a>

//           <nav class="mt-2 mb-3">
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-house"></i>
//             <span class="title-link">Home</span>
//             </a>
//             <a class="active-link">
//             <i class=" fa-solid title-icon fa-hashtag"></i>
//             <span class="title-link">Explore</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-bell"></i>
//             <span class="title-link">Notifications</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-envelope"></i>
//             <span class="title-link">Messages</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-house"></i>
//             <span class="title-link">Bockmarks</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-list-ul"></i>
//             <span class="title-link">Lists</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid title-icon fa-user"></i>
//             <span class="title-link">Profile</span>
//             </a>
//             <a class="active-link">
//             <i class="fa-solid  fa-ellipsis"></i>
//             <span class="title-link">More</span>
//             </a>
//           </nav>
//           {/**************/}
//             <a class="active-link">
//             <i class="fa-solid fa-feather icon text-white"></i>
//             </a>
//             <span class="tweet-btn">Tweet</span>
          
//             {/* <!-- User --> */}
//       <div class="w-14 xl:w-full mx-auto mt-auto flex  justify-between mb-2  p-2 cursor-pointer ">
//         <img class="w-10 h-10 rounded-full"
//           src="/osman.png" alt="person" />
//         <div class="hidden xl:flex flex-col">
//           <h4 class="text-gray-800 text-white font-bold text-sm">Ag coding</h4>
//           <p  class="text-gray-400 text-sm">@abdoelazizgamal</p>
//         </div>

//         <i class="fa-solid fa-chevron-down text-xs hidden xl:flex items-center xl:ml-4  text-gray-800 dark:text-white">
//         </i>

//       </div>

//         </div>


//         {/* to do */}
//         <div className="xl:w-1/2   w-full  flex flex-col ">098765</div>
//         <div className="xl:w-[30%] hidden  flex flex-col">osmanmamd</div>

//       </div>
//   )
// }


// // sm (Small devices):  640px  and  up
// // md (Medium devices): 768px and up
// // lg (Large devices):  1024px and up
// // xl (Extra large devices): 1280px and up
// // 2xl (2X large devices):   1536px   and up


