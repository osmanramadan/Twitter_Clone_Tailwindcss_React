
export default function Homepage() {

  return (
      <div className="container  bg-dim-900   mx-auto h-screen  h-full flex  xl:max-w-[1200px]">

        <div className="xl:w-1/4 w-20 flex flex-col text-2xl">
          <a class="active-link">
          <i class="fa-brands fa-twitter text-5xl"></i>
          </a>

          <nav class="mt-3">
            <a class="active-link">
            <i class="fa-solid fa-house"></i>
            <span class="title-link">Home</span>
            </a>
            <a class="active-link">
            <i class=" fa-solid fa-hashtag"></i>
            <span class="title-link">Explore</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-bell"></i>
            <span class="title-link">Notifications</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-envelope"></i>
            <span class="title-link">Messages</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-house"></i>
            <span class="title-link">Bockmarks</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-list-ul"></i>
            <span class="title-link">Lists</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-user"></i>
            <span class="title-link">Profile</span>
            </a>
            <a class="active-link">
            <i class="fa-solid fa-ellipsis"></i>
            <span class="title-link">More</span>
            </a>
          </nav>
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