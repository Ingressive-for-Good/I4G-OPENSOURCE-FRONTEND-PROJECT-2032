import React from "react";
import CreateWishButton from "../components/atoms/Button/CreateWishButton";
import NavbarDashboard from "../components/molecules/NavbarDashboard";
import SidebarWishlist from "../components/molecules/SidebarWishlist";

function EmptyWishlistViewProducts() {
  return (
    <div className="md:bg-gray-50">
        <NavbarDashboard />
        {/* Sidebar */}
        <div className="hidden md:block">
            <SidebarWishlist />
        </div>
        <div className="flex px-6 justify-between md:relative md:bottom-14">
            {/* Intro text */}
            <div className="font-cabinetGrotesk md:ml-64">
                <p className="font-medium text-[20px]">Hey Nora👋🏾</p>
                <h1 className="font-bold text-[28px]">View Items in your Wishlist</h1>
            </div>
            <div className="hidden gap-4 items-center md:flex">
                {/* search bar */}
            <div className="hidden  gap-2 h-10 p-2 border rounded-md items-center md:flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.17502 16.6833C13.3218 16.6833 16.6834 13.3217 16.6834 9.17496C16.6834 5.02822 13.3218 1.66663 9.17502 1.66663C5.02828 1.66663 1.66669 5.02822 1.66669 9.17496C1.66669 13.3217 5.02828 16.6833 9.17502 16.6833Z" fill="#717591"/>
                    <path d="M18.325 15.7917C18.05 15.2833 17.4667 15 16.6834 15C16.0917 15 15.5834 15.2417 15.2834 15.6583C14.9834 16.075 14.9167 16.6333 15.1 17.1917C15.4584 18.275 16.0834 18.5167 16.425 18.5583C16.475 18.5667 16.525 18.5667 16.5834 18.5667C16.95 18.5667 17.5167 18.4083 18.0667 17.5833C18.5084 16.9417 18.5917 16.3 18.325 15.7917Z" fill="#717591"/>
                </svg>
                <form action="">
                    <input className="bg-gray-50" type="text" placeholder="Search for gadgets" />
                </form>
            </div>
            {/* notificaation icon */}
            <div className=" bg-gray-300 rounded-full p-3">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9516 15.6975L19.8683 13.8991C19.6408 13.4983 19.435 12.74 19.435 12.2958V9.55496C19.435 7.00912 17.94 4.80996 15.7841 3.78079C15.2208 2.78413 14.1808 2.16663 12.9891 2.16663C11.8083 2.16663 10.7466 2.80579 10.1833 3.81329C8.07081 4.86413 6.60831 7.04163 6.60831 9.55496V12.2958C6.60831 12.74 6.40248 13.4983 6.17498 13.8883L5.08081 15.6975C4.64748 16.4233 4.54998 17.225 4.82081 17.9616C5.08081 18.6875 5.69831 19.2508 6.49998 19.5216C8.60165 20.2366 10.8116 20.5833 13.0216 20.5833C15.2316 20.5833 17.4416 20.2366 19.5433 19.5325C20.3016 19.2833 20.8866 18.7091 21.1683 17.9616C21.45 17.2141 21.3741 16.3908 20.9516 15.6975Z" fill="#717591"/>
                    <path d="M16.0658 21.6775C15.6108 22.9341 14.4083 23.8333 13 23.8333C12.1442 23.8333 11.2992 23.4866 10.7033 22.8691C10.3567 22.5441 10.0967 22.1108 9.94501 21.6666C10.0858 21.6883 10.2267 21.6991 10.3783 21.7208C10.6275 21.7533 10.8875 21.7858 11.1475 21.8075C11.765 21.8616 12.3933 21.8941 13.0217 21.8941C13.6392 21.8941 14.2567 21.8616 14.8633 21.8075C15.0908 21.7858 15.3183 21.775 15.535 21.7425C15.7083 21.7208 15.8817 21.6991 16.0658 21.6775Z" fill="#717591"/>
                </svg>
            </div>
            {/* User Image */}
            <img src="../src/assets/icons/avatar.png" alt="user avatar" />
            </div>
        </div>
        {/* Empty wishlist icon */}
        <div className=" flex justify-center mt-20 md:ml-48 md:relative md:bottom-20">
            <svg width="350" height="auto" viewBox="0 0 435 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M335.741 361.58L120.26 365.969L114.864 100.821C114.817 98.7657 115.176 96.7214 115.92 94.8049C116.664 92.8884 117.778 91.1374 119.199 89.6519C120.62 88.1664 122.319 86.9756 124.201 86.1475C126.082 85.3194 128.108 84.8703 130.163 84.8259L285.099 81.6745L330.944 125.85L335.741 361.58Z" fill="#F1F1F4" stroke="#C7C8D3" stroke-width="9.04929" stroke-miterlimit="10"/>
                <path d="M285.137 83.556L285.56 104.334C285.625 107.527 286.317 110.676 287.599 113.601C288.88 116.526 290.725 119.17 293.028 121.382C295.331 123.594 298.047 125.33 301.021 126.492C303.996 127.654 307.169 128.219 310.362 128.154L330.982 127.731" stroke="#C7C8D3" stroke-width="9.04929" stroke-miterlimit="10"/>
                <path d="M236.643 18.301C234.138 15.7879 231.166 13.7896 227.894 12.4188C224.539 11.0086 220.934 10.286 217.294 10.2939H217.169C209.839 10.3233 202.98 13.1909 197.849 18.3746C192.711 23.5583 189.91 30.4404 189.939 37.7712C189.961 42.2049 191.064 46.6092 193.137 50.4988L193.468 51.1164V61.4691H203.819L204.436 61.8C208.325 63.8734 212.728 64.9764 217.161 64.9984H217.286C224.564 64.9984 231.401 62.1897 236.554 57.0868C241.73 51.9546 244.604 45.0945 244.648 37.7712C244.663 34.0507 243.95 30.4478 242.524 27.0508C241.152 23.7787 239.154 20.8063 236.643 18.301ZM202.584 41.1755C201.66 41.1566 200.781 40.7765 200.135 40.1167C199.488 39.4569 199.126 38.5699 199.126 37.6462C199.126 36.7224 199.488 35.8355 200.135 35.1756C200.781 34.5158 201.66 34.1357 202.584 34.1168C203.507 34.1357 204.386 34.5158 205.032 35.1756C205.679 35.8355 206.041 36.7224 206.041 37.6462C206.041 38.5699 205.679 39.4569 205.032 40.1167C204.386 40.7765 203.507 41.1566 202.584 41.1755ZM217.286 41.1755C216.363 41.1566 215.484 40.7765 214.837 40.1167C214.191 39.4569 213.829 38.5699 213.829 37.6462C213.829 36.7224 214.191 35.8355 214.837 35.1756C215.484 34.5158 216.363 34.1357 217.286 34.1168C218.21 34.1357 219.089 34.5158 219.735 35.1756C220.382 35.8355 220.744 36.7224 220.744 37.6462C220.744 38.5699 220.382 39.4569 219.735 40.1167C219.089 40.7765 218.21 41.1566 217.286 41.1755ZM231.989 41.1755C231.066 41.1566 230.187 40.7765 229.54 40.1167C228.894 39.4569 228.532 38.5699 228.532 37.6462C228.532 36.7224 228.894 35.8355 229.54 35.1756C230.187 34.5158 231.066 34.1357 231.989 34.1168C232.913 34.1357 233.792 34.5158 234.438 35.1756C235.085 35.8355 235.447 36.7224 235.447 37.6462C235.447 38.5699 235.085 39.4569 234.438 40.1167C233.792 40.7765 232.913 41.1566 231.989 41.1755Z" fill="#F1F1F4"/>
                <path d="M228.461 37.646C228.461 38.5821 228.832 39.4798 229.494 40.1416C230.156 40.8035 231.054 41.1753 231.989 41.1753C232.925 41.1753 233.823 40.8035 234.485 40.1416C235.146 39.4798 235.518 38.5821 235.518 37.646C235.518 36.71 235.146 35.8123 234.485 35.1504C233.823 34.4885 232.925 34.1167 231.989 34.1167C231.054 34.1167 230.156 34.4885 229.494 35.1504C228.832 35.8123 228.461 36.71 228.461 37.646ZM199.055 37.646C199.055 38.5821 199.427 39.4798 200.089 40.1416C200.75 40.8035 201.648 41.1753 202.584 41.1753C203.52 41.1753 204.417 40.8035 205.079 40.1416C205.741 39.4798 206.112 38.5821 206.112 37.646C206.112 36.71 205.741 35.8123 205.079 35.1504C204.417 34.4885 203.52 34.1167 202.584 34.1167C201.648 34.1167 200.75 34.4885 200.089 35.1504C199.427 35.8123 199.055 36.71 199.055 37.646Z" fill="#C7C8D3"/>
                <path d="M247.663 24.8818C246.001 20.9334 243.619 17.3893 240.583 14.3453C237.568 11.3189 233.989 8.91322 230.049 7.26457C226.005 5.56608 221.712 4.70581 217.286 4.70581H217.139C212.684 4.72787 208.369 5.6102 204.311 7.34545C200.404 9.01101 196.859 11.4209 193.872 14.4409C190.865 17.4776 188.506 21.0069 186.874 24.9406C185.183 29.014 184.33 33.3448 184.352 37.8006C184.377 42.9069 185.585 47.9379 187.881 52.4987V63.6749C187.881 64.572 188.237 65.4323 188.871 66.0666C189.505 66.7009 190.366 67.0572 191.262 67.0572H202.444C207.004 69.3535 212.034 70.5616 217.139 70.5865H217.294C221.697 70.5865 225.968 69.7336 229.99 68.0645C233.91 66.4355 237.476 64.0579 240.488 61.0647C243.524 58.0574 245.913 54.5428 247.582 50.6238C249.317 46.5651 250.199 42.249 250.221 37.7932C250.243 33.3154 249.375 28.9699 247.663 24.8818ZM236.555 57.0869C231.401 62.1897 224.564 64.9984 217.286 64.9984H217.161C212.729 64.9764 208.325 63.8735 204.436 61.8L203.819 61.4691H193.468V51.1164L193.137 50.4988C191.064 46.6092 189.961 42.2049 189.939 37.7712C189.91 30.4405 192.711 23.5583 197.849 18.3746C202.981 13.1909 209.839 10.3233 217.169 10.2939H217.294C220.97 10.2939 224.535 11.0071 227.895 12.4189C231.173 13.7938 234.114 15.7717 236.643 18.3011C239.164 20.8231 241.149 23.7715 242.524 27.0508C243.95 30.4478 244.663 34.0507 244.648 37.7712C244.604 45.0945 241.73 51.9546 236.555 57.0869Z" fill="#C7C8D3"/>
                <path d="M213.758 37.646C213.758 38.5821 214.13 39.4798 214.792 40.1416C215.453 40.8035 216.351 41.1753 217.287 41.1753C218.223 41.1753 219.12 40.8035 219.782 40.1416C220.444 39.4798 220.815 38.5821 220.815 37.646C220.815 36.71 220.444 35.8123 219.782 35.1504C219.12 34.4885 218.223 34.1167 217.287 34.1167C216.351 34.1167 215.453 34.4885 214.792 35.1504C214.13 35.8123 213.758 36.71 213.758 37.646Z" fill="#C7C8D3"/>
                <g clip-path="url(#clip0_219_4356)">
                <path d="M357.09 288.075C353.727 281.173 344.041 275.527 332.775 278.814C327.757 280.551 323.313 283.633 319.927 287.724C317.276 291.195 315.177 295.056 313.704 299.168L330.165 306.547L316.188 319.748L321.96 326.625L318.02 329.988L308.987 319.397L320.881 308.078L307.23 302.029C308.435 297.159 310.381 292.504 313.002 288.226C313.806 286.883 314.694 285.592 315.661 284.361H315.812C313.029 281.801 309.687 279.927 306.051 278.89C294.834 275.577 285.174 281.173 281.811 288.075C277.094 297.738 279.051 308.605 287.633 320.376C294.358 329.586 303.968 338.923 317.92 349.765C318.361 350.109 318.904 350.295 319.463 350.295C320.022 350.295 320.565 350.109 321.006 349.765C334.933 338.948 344.568 329.687 351.293 320.376C359.85 308.605 361.807 297.738 357.09 288.075Z" fill="#C7C8D3"/>
                </g>
                <path d="M283.637 159.106L181.736 163.553C179.366 163.655 177.211 160.966 177.07 157.718C176.929 154.471 178.838 151.603 181.209 151.501L283.114 147.052C285.482 146.946 287.636 149.641 287.776 152.889C287.919 156.13 286.008 159.005 283.637 159.106Z" fill="#C7C8D3"/>
                <path d="M284.781 202.449L182.88 206.896C180.51 206.998 178.355 204.309 178.214 201.062C178.073 197.814 179.982 194.946 182.353 194.844L284.258 190.395C286.626 190.289 288.78 192.984 288.92 196.232C289.063 199.473 287.152 202.348 284.781 202.449Z" fill="#C7C8D3"/>
                <path d="M285.783 245.462L183.882 249.909C181.511 250.01 179.356 247.322 179.215 244.074C179.075 240.826 180.984 237.958 183.354 237.857L285.259 233.407C287.627 233.301 289.781 235.997 289.922 239.244C290.064 242.485 288.153 245.36 285.783 245.462Z" fill="#C7C8D3"/>
                <path d="M286.784 288.474L184.883 292.921C182.512 293.023 180.357 290.334 180.217 287.086C180.076 283.839 181.985 280.971 184.355 280.869L286.261 276.42C288.629 276.313 290.782 279.009 290.923 282.257C291.065 285.498 289.154 288.372 286.784 288.474Z" fill="#C7C8D3"/>
                <rect x="142.441" y="151.116" width="19.9312" height="19.9358" transform="rotate(-1.33357 142.441 151.116)" fill="#F1F1F4" stroke="#C7C8D3" stroke-width="4.80312"/>
                <rect x="143.417" y="193.053" width="19.9312" height="19.9358" transform="rotate(-1.33357 143.417 193.053)" fill="#F1F1F4" stroke="#C7C8D3" stroke-width="4.80312"/>
                <rect x="144.393" y="234.99" width="19.9312" height="19.9358" transform="rotate(-1.33357 144.393 234.99)" fill="#F1F1F4" stroke="#C7C8D3" stroke-width="4.80312"/>
                <rect x="145.37" y="276.927" width="19.9312" height="19.9358" transform="rotate(-1.33357 145.37 276.927)" fill="#F1F1F4" stroke="#C7C8D3" stroke-width="4.80312"/>
                <defs>
                <clipPath id="clip0_219_4356">
                <rect width="90.3342" height="90.3507" fill="white" transform="translate(274.283 268.901)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div className=" text-center relative bottom-12 md:ml-48 md:relative md:bottom-32">
            <h1 className="font-cabinetGrotesk text-[20px] font-bold">Your Wishlist is Empty</h1>
            <p className="font-campton text-[20px] text-gray-500">Add products to your wishlist</p>
        </div>
        {/* Create button */}
        <div className=" flex justify-center pb-10 md:ml-48 md:relative md:bottom-24">
            <CreateWishButton />
        </div>
    </div>
  )
}

export default EmptyWishlistViewProducts;