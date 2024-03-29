function ThemeToggle() {
    const [theme, setTheme] = React.useState(
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  
    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', newTheme);
      setTheme(newTheme);
    };
  
    return (
      <button onClick={toggleTheme} style={{
        background: 'none', 
        border: 'none', 
        cursor: 'pointer',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        {theme === 'dark' ?
            <svg className="sun-icon" version="1.1" id="fi_66275" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 45.16 45.16" style={{enableBackground: 'new 0 0 45.16 45.16'}} xmlSpace="preserve">
            <g>
                <g>
                    <path d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
                        S28.816,11.269,22.58,11.269z"></path>
                    <g>
                        <g>
                            <path d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
                                v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"></path>
                        </g>
                        <g>
                            <path d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
                                v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"></path>
                        </g>
                        <g>
                            <path d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
                                c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"></path>
                        </g>
                        <g>
                            <path d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
                                c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"></path>
                        </g>
                        <g>
                            <path d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
                                h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"></path>
                        </g>
                        <g>
                            <path d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
                                h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"></path>
                        </g>
                        <g>
                            <path d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
                                l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"></path>
                        </g>
                        <g>
                            <path d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
                                c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"></path>
                        </g>
                    </g>
                </g>
            </g>
            </svg> : <svg className="moon-icon" height="24px" viewBox="0 0 511.99928 511" width="24px" xmlns="http://www.w3.org/2000/svg" id="fi_1812660">
                <path d="m504.753906 305.828125c-5.824218-3.59375-13.34375-2.933594-18.386718 1.675781-36.726563 33.3125-84.234376 51.667969-133.746094 51.667969-109.894532 0-199.304688-89.410156-199.304688-199.304687 0-49.515626 18.355469-97.019532 51.667969-133.746094 4.59375-5.0625 5.285156-12.5625 1.675781-18.386719-3.609375-5.808594-10.675781-8.503906-17.203125-6.660156-111.558593 31.589843-189.457031 134.714843-189.457031 250.777343 0 143.71875 116.917969 260.632813 260.632812 260.632813 116.0625 0 219.191407-77.898437 250.78125-189.453125 1.871094-6.589844-.851562-13.597656-6.660156-17.203125zm0 0"></path><path d="m253.882812 202.820312 36.320313 18.144532 18.144531 36.324218c2.589844 5.195313 7.90625 8.472657 13.714844 8.472657 5.8125 0 11.109375-3.277344 13.714844-8.472657l18.164062-36.324218 36.304688-18.144532c5.195312-2.605468 8.472656-7.90625 8.472656-13.714843 0-5.808594-3.277344-11.109375-8.472656-13.714844l-36.304688-18.148437-18.164062-36.320313c-5.210938-10.390625-22.246094-10.390625-27.429688 0l-18.144531 36.320313-36.320313 18.148437c-5.195312 2.589844-8.476562 7.90625-8.476562 13.714844 0 5.808593 3.28125 11.125 8.476562 13.714843zm0 0"></path><path d="m413.945312 83.207031h15.332032v15.332031c0 8.472657 6.859375 15.332032 15.332031 15.332032s15.332031-6.859375 15.332031-15.332032v-15.332031h15.332032c8.472656 0 15.332031-6.855469 15.332031-15.332031 0-8.472656-6.859375-15.328125-15.332031-15.328125h-15.332032v-15.332031c0-8.476563-6.859375-15.332032-15.332031-15.332032s-15.332031 6.855469-15.332031 15.332032v15.332031h-15.332032c-8.472656 0-15.328124 6.855469-15.328124 15.328125 0 8.476562 6.855468 15.332031 15.328124 15.332031zm0 0"></path></svg>
        }   
      </button>
    );
  }


  