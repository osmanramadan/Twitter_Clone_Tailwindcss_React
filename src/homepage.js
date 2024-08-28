import React from 'react';


export default function Homepage() {
  return (
    <div className="xl:mx-12 mx-3 h-screen flex xl:max-w-[1400px]">

      {/* Left Sidebar */}
      <div className="xl:mx-5 xl:w-1/6 w-16 flex flex-col text-2xl">
        <div className="fixed top-0 left-11 bottom-0 xl:mx-4 xl:w-1/5 w-16 flex flex-col text-2xl">
          <a className="active-link !mt-1">
            <i className="fa-solid fa-x text-4xl hover:text-blue-custom"></i>
          </a>

          <nav className="mt-1 mb-3">
            <a className="active-link">
              <i className="fa-solid title-icon fa-house"></i>
              <span className="title-link !font-[600]">Home</span>
            </a>
            <a className="active-link">
              <i className="fa-solid title-icon fa-hashtag"></i>
              <span className="title-link">Explore</span>
            </a>
            <a className="active-link">
              <i className="fa-solid title-icon fa-bell"></i>
              <span className="title-link">Notifications</span>
            </a>
            <a className="active-link">
              <i className="fa-solid title-icon fa-envelope"></i>
              <span className="title-link">Messages</span>
            </a>
            <a className="active-link">
              <i className="fa-solid fa-bookmark title-icon"></i>
              <span className="title-link">Grok</span>
            </a>
            <a className="active-link">
              <i className="fa-solid title-icon fa-list-ul"></i>
              <span className="title-link">Communities</span>
            </a>
            <a className="active-link">
              <i className="fa-solid title-icon fa-user"></i>
              <span className="title-link">Profile</span>
            </a>
            <a className="active-link">
              <i className="fa-solid fa-ellipsis hover:text-blue-custom"></i>
              <span className="title-link">More</span>
            </a>
          </nav>

          {/* Tweet Button */}
          <a className="active-link !mx-0 !mt-1">
            <i className="fa-solid fa-feather icon text-white"></i>
          </a>
          <span className="tweet-btn">Post</span>

          {/* Profile Info */}
          <div className="w-14 xl:w-full mx-auto mt-auto flex items-center mb-3 p-2 cursor-pointer">
            <img  className="w-12 !mx-0 h-12 rounded-full" src="/osman.png" alt="person" />
            <div className="hidden xl:flex flex-col xl:ml-4">
              <h4 className="text-gray-800 text-white font-[400]">Osman Ramadan</h4>
              <p className="text-gray-400 text-xl">@0smanramadan</p>
            </div>
            <i className="fa-solid fa-ellipsis hidden xl:flex items-center xl:ml-5 text-white"></i>
          </div>
        </div>
      </div>

      {/* Left Divider */}
      <div style={{marginLeft:"70px"}}>
        <div className="flex items-center fixed top-0 bottom-0 h-full bg-[#111111]">
          <span className="h-full w-px bg-[#2F3336]"></span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="xl:w-3/5 w-full">
        <div className="flex justify-between items-center  mt-4 mb-5 h-8 text-white p-0 sticky z-10">
          <span className="h-40 w-px bg-[#2F3336]"></span>
          <span className="active-btn w-1/2 py-5 h-39  text-center text-[20px] font-bold hover:bg-[#181818]">For you</span>
          <span className="w-1/2 py-5 h-39  text-center text-[#6B7074] text-[20px] hover:bg-[#181818]">Following</span>
        </div>

        {/* Divider */}
      <div className="w-full h-[1px] bg-[#2F3336] z-10"></div>
        <div className="px-10 text-white">
      <div className="flex px-3  py-3">
      {/* First Column */}
      <div style={{marginLeft:"-30px",zIndex:"1000"}}  className="flex flex-col justify-between w-15 h-36 text-[#023492]">
        <img  className="w-12 !mx-0 h-12 rounded-full" src="/osman.png" alt="person" />
      </div>

   {/* Second Column */}
    <div className="flex flex-col justify-between w-full h-36">
    <span className="px-3 py-1 mx-4">
    <input
      type="text"
      placeholder="What is happening?!"
      style={{ fontFamily: 'Arial, sans-serif' }} 
      className="
        w-full
        text-[1.5rem]
        h-12
        bg-transparent
        text-white
        placeholder-[#71767B]
        placeholder:text-[1.7rem]
        placeholder:font-[300]
        cursor-text
        focus:outline-none
      " 
      />
     </span>
  <span className="mx-4 py-1 text-[#1A8FDF] font-[500] text-[1.1rem] hover:bg-[#031019]  w-1/3 rounded-full"><i class="fa-solid fa-earth mx-3"></i>
    Everyone can reply
  </span>
  {/* divider */}
  <div className="w-full h-[1px] bg-[#2F3336] mb-2"></div>
  {/* section */}
  <span className="px-4 py-6 mx-4">
    <div className="flex flex-row justify-between w-full">
        <div className="icons text-[#1DA1F2]">
            <span><i className="fas fa-image"></i></span>
            <span className='ml-2'><i className="fas fa-image"></i></span>
            <span className='ml-2'><i className="fas fa-image"></i></span>
            <span className='ml-2'><i className="fas fa-image"></i></span>
            <span className='ml-2'><i className="fas fa-image"></i></span>
            <span className='ml-2'><i className="fas fa-image"></i></span>
        </div>
        <div>
             <span className="post-btn">Post</span>
        </div>
    </div>
  </span>
</div>
  </div>
  </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2F3336] mt-4"></div>
      <div className='flex items-center'>
        <span className="py-4 m-0 hover:bg-[#080808] text-[#1988D3] font-[450] text-[1.3rem] w-full text-center">Show 200 posts</span>
      </div>
      {/* Divider */}
        <div className="w-full h-[1px] bg-[#2F3336] mb-2"></div>
        {/* Left Divider */}
        <div style={{marginLeft:"70px"}}>
        <div className="flex items-center fixed top-0 bottom-0 h-full bg-[#111111]">
          <span className="w-full bg-[#2F3336]"></span>
        </div>
      </div>
      
      <div className='posts  px-5'>
         <div className='text-white mt-2'>
                   {/* Profile Info */}
          <div className="xl:w-15 w-full  mt-2 flex justify-start items-start p-1 cursor-pointer">
            <img  className="w-12 mt-1 !mx-0 h-12 rounded-full" src="/icon.jpg" alt="person" />
            <div className="flex flex-row ml-4 bg-transparent">
              <h4 className="text-gray-700 text-[#E7E9EA] font-[500] text-xl bg-black">أٌقوال وحكم الفلاسفة</h4>
              <p className="text-gray-400 text-xl ml-1">@Hukam . 6h</p>
            </div>
          </div>
          <div style={{ direction: 'rtl' }} className='title'>
            <span className='text-[700] text-xl'>أنت المقصود إن شاء الله ❤️</span>
          </div>
          <div className='flex justify-center mt-4'>
            <img src='/postimage.png' height={280} width={380} className='rounded-xl'/>
          </div>
       </div>
       {/* ******************* */}
             {/* Divider */}
        <div className="w-full mt-3 h-[1px] bg-[#2F3336] mb-2"></div>
       <div className='text-white  mt-3 post'>
                   {/* Profile Info */}
          <div className="xl:w-15 w-full  mt-2 flex justify-start items-start p-1 cursor-pointer ">
            <img  className="w-12 mt-1 !mx-0 h-12 rounded-full" src="/icon.jpg" alt="person" />
            <div className="flex flex-row ml-4">
              <h4 className="text-gray-800 text-[#E7E9EA] font-[500] text-xl bg-black">أٌقوال وحكم الفلاسفة</h4>
              <p className="text-gray-400 text-xl ml-1">@Hukam . 6h</p>
            </div>
          </div>
          <div style={{ direction: 'rtl' }} className='title'>
            <span className='text-[700] text-xl'>أنت المقصود إن شاء الله ❤️</span>
          </div>
          <div className='flex justify-center mt-4'>
            <img src='/postimage.png' className='rounded-xl'/>
          </div>
       </div>
  

      </div>
   

    
    </div>
    
      {/* Right Divider */}
    <div>

        <div className="flex items-center fixed top-0 bottom-0 h-full bg-[#111111]">
          <span className="h-full w-px bg-[#2F3336]"></span>
        </div>

    </div>


      {/* Right Sidebar */}
      <div className="xl:w-1/5 hidden text-white xl:block pl-2 w-full flex flex-col">
        osman
      </div>
    </div>
  );
}
