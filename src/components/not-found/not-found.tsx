import React from 'react';

import { ErrorContainer, ErrorText } from '@/features/message/message-style';

const NotFound = ({ title, message }: { title: string; message: string }) => {
  return (
    <ErrorContainer>
      <svg
        width='406'
        height='306'
        viewBox='0 0 406 306'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M104.778 215.808L300.592 215.808V73.6168L104.778 73.6168L104.778 215.808Z'
          fill='#E6E6E6'
        />
        <path
          opacity='0.05'
          d='M295.435 111.7C295.435 111.7 291.375 110.553 289.965 116.704C288.554 122.854 289.214 124.184 292.208 125.727C295.202 127.27 293.669 137.257 288.219 137.044C282.768 136.831 278.333 132.426 275.663 137.044C272.994 141.662 270.294 175.614 259.139 168.245C247.984 160.876 245.487 132.812 245.487 132.812L225.553 132.517V154.533L241.062 154.218C241.062 154.218 243.092 181.258 264.864 187.297C265.948 187.586 266.961 188.092 267.844 188.785C268.726 189.477 269.459 190.342 269.997 191.326C270.535 192.311 270.868 193.394 270.975 194.51C271.081 195.627 270.96 196.754 270.619 197.822L264.762 215.798H298.47V192.088C298.47 192.088 300.074 118.49 295.435 111.7Z'
          fill='black'
        />
        <path
          opacity='0.45'
          d='M296.99 251.638C329.312 251.638 355.515 247.734 355.515 242.919C355.515 238.104 329.312 234.2 296.99 234.2C264.667 234.2 238.465 238.104 238.465 242.919C238.465 247.734 264.667 251.638 296.99 251.638Z'
          fill='#E6E6E6'
        />
        <path
          opacity='0.45'
          d='M91.9392 251.638C120.164 251.638 143.044 247.734 143.044 242.919C143.044 238.104 120.164 234.2 91.9392 234.2C63.7146 234.2 40.834 238.104 40.834 242.919C40.834 247.734 63.7146 251.638 91.9392 251.638Z'
          fill='#E6E6E6'
        />
        <path
          opacity='0.58'
          d='M339.782 234.2C339.782 234.2 345.75 232.596 347.07 227.095C347.07 227.095 337.844 225.187 337.539 234.718L339.782 234.2Z'
          fill='#064649'
        />
        <path
          opacity='0.73'
          d='M339.01 233.621C339.01 233.621 343.202 227.065 339.569 220.893C337.551 222.241 336.058 224.24 335.337 226.557C334.617 228.874 334.713 231.367 335.61 233.621H339.01Z'
          fill='#064649'
        />
        <path
          d='M337.994 233.621C337.994 233.621 335.822 226.669 329.184 225.319C329.184 225.319 327.915 229.825 333.447 233.621H337.994Z'
          fill='#064649'
        />
        <path
          d='M342.308 233.49L341.059 241.741H333.457L332.371 233.49H342.308Z'
          fill='#0C0C0C'
        />
        <path
          d='M294.452 132.822C294.452 132.822 281.774 131.127 279.227 141.723C276.679 152.32 276.324 166.987 266.133 169.92C255.943 172.853 250.319 152.492 250.319 152.492C250.319 152.492 247.955 146.778 245.407 145.997C242.859 145.215 241.042 150.858 245.407 154.309C245.407 154.309 249.091 180.314 268.61 179.4C288.128 178.487 294.452 151.68 294.452 132.822Z'
          fill='#F4A28C'
        />
        <path
          opacity='0.08'
          d='M294.452 132.822C294.452 132.822 281.774 131.127 279.227 141.723C276.679 152.32 276.324 166.987 266.133 169.92C255.943 172.853 250.319 152.492 250.319 152.492C250.319 152.492 247.955 146.778 245.407 145.997C242.859 145.215 241.042 150.858 245.407 154.309C245.407 154.309 249.091 180.314 268.61 179.4C288.128 178.487 294.452 151.68 294.452 132.822Z'
          fill='black'
        />
        <path
          d='M294.451 132.822C294.451 132.822 280.84 130.132 278.932 141.135C277.893 147.439 276.126 153.6 273.664 159.496L284.058 162.866L294.451 132.822Z'
          fill='#064649'
        />
        <path
          opacity='0.46'
          d='M294.451 132.822C294.451 132.822 280.84 130.132 278.932 141.135C277.893 147.439 276.126 153.6 273.664 159.496L284.058 162.866L294.451 132.822Z'
          fill='white'
        />
        <path
          d='M295.102 114.948C294.14 117.006 293.458 119.184 293.072 121.423C293.041 121.693 293.065 121.967 293.141 122.227C293.218 122.488 293.346 122.731 293.519 122.941C293.691 123.151 293.904 123.324 294.144 123.451C294.385 123.577 294.648 123.654 294.919 123.677C295.78 123.818 296.663 123.707 297.463 123.357C298.263 123.008 298.944 122.435 299.426 121.708L301.811 118.784C302.228 118.148 302.436 117.397 302.407 116.637C302.378 115.877 302.113 115.144 301.648 114.542C300.045 112.187 296.046 112.633 295.102 114.948Z'
          fill='#F4A28C'
        />
        <path
          d='M300.886 119.454L301.851 132.822H294.451L296.664 123.342L300.886 119.454Z'
          fill='#F4A28C'
        />
        <path
          d='M294.117 117.333L292.503 118.409C292.411 118.469 292.335 118.551 292.283 118.647C292.231 118.744 292.203 118.852 292.203 118.962C292.203 119.072 292.231 119.18 292.283 119.277C292.335 119.373 292.411 119.455 292.503 119.515L293.863 120.337L294.117 117.333Z'
          fill='#F4A28C'
        />
        <path
          opacity='0.31'
          d='M296.602 123.565C297.493 123.408 298.325 123.012 299.008 122.418C299.008 122.418 299.495 125.311 295.963 126.285L296.602 123.565Z'
          fill='#CE8172'
        />
        <path
          d='M298.471 119.292C298.471 119.292 299.049 117.82 300.115 118.348C301.181 118.876 300.369 120.997 298.785 120.632L298.471 119.292Z'
          fill='#F4A28C'
        />
        <path
          d='M281.073 208.927L274.811 237.387H278.454L290.634 208.927H281.073Z'
          fill='#F4A28C'
        />
        <path
          d='M301.445 205.476L308.124 237.387H311.788L311.23 205.242L301.445 205.476Z'
          fill='#F4A28C'
        />
        <path
          d='M274.811 237.387C274.811 237.387 272.781 239.945 270.203 239.823C267.625 239.701 267.24 243.345 271.401 242.97C272.697 242.861 273.98 242.641 275.238 242.31C276.396 242.046 277.603 242.088 278.74 242.432C278.961 242.486 279.195 242.47 279.407 242.387C279.62 242.303 279.802 242.156 279.927 241.965C281.104 240.574 278.212 237.387 278.212 237.387H274.811Z'
          fill='#064649'
        />
        <path
          d='M311.514 237.387C311.514 237.387 313.544 239.945 316.122 239.823C318.7 239.701 319.086 243.345 314.934 242.97C313.639 242.862 312.355 242.642 311.098 242.31C309.936 242.046 308.726 242.088 307.586 242.432C307.365 242.487 307.133 242.471 306.922 242.388C306.711 242.304 306.531 242.156 306.408 241.965C305.221 240.574 308.124 237.387 308.124 237.387H311.514Z'
          fill='#064649'
        />
        <path
          d='M294.451 132.822H301.85C301.85 132.822 302.358 132.822 303.231 132.822C319.379 133.339 328.758 151.274 320.181 164.967C315.411 172.579 309.717 182.841 309.341 188.972L280.566 187.51C280.566 187.51 282.738 168.844 277.409 158.177C277.409 158.187 267.604 141.388 294.451 132.822Z'
          fill='#064649'
        />
        <path
          opacity='0.08'
          d='M307.301 142.596C307.301 142.596 303.728 149.996 302.875 163.302C302.023 176.609 281.834 160.887 281.834 160.887L280.9 182.871L310.285 184.465L312.731 175.553C312.731 175.553 320.435 161.719 307.301 142.596Z'
          fill='black'
        />
        <path
          d='M280.376 180.429L299.561 178.182L296.089 148.543L276.905 150.79L280.376 180.429Z'
          fill='#FF914D'
        />
        <path
          d='M282.367 152.667L291.299 151.621L290.79 147.276L281.858 148.322L282.367 152.667Z'
          fill='#0C0C0C'
        />
        <path
          d='M280.901 182.871L310.286 184.424L318.142 214.184L275.664 212.672L280.901 182.871Z'
          fill='#0C0C0C'
        />
        <path
          opacity='0.08'
          d='M278.07 160.927L298.472 169.067L299.548 178.213L280.364 180.466L278.07 160.927Z'
          fill='black'
        />
        <path
          d='M307.545 144.017C307.497 142.708 307.86 141.416 308.584 140.324C309.307 139.232 310.356 138.395 311.581 137.93C312.805 137.465 314.145 137.395 315.412 137.732C316.678 138.068 317.807 138.793 318.639 139.805C322.811 144.811 325.019 151.165 324.851 157.679C324.607 175.097 322.263 193.955 284.688 173.351L286.717 167.829C286.717 167.829 303.394 175.848 310.357 173.249C315.472 171.321 308.073 155.984 307.545 144.017Z'
          fill='#F4A28C'
        />
        <path
          d='M286.706 167.819C286.706 167.819 280.444 164.845 277.774 167.819C275.105 170.793 279.348 173.462 284.686 173.341L286.706 167.819Z'
          fill='#F4A28C'
        />
        <path
          d='M294.451 112.979L293.162 116.196L298.471 118.226C298.471 118.226 298.775 121.799 296.897 122.448C297.333 122.426 297.759 122.317 298.151 122.127C298.544 121.937 298.894 121.67 299.181 121.342C299.405 121.096 299.715 120.947 300.047 120.927C300.378 120.906 300.705 121.015 300.957 121.23L301.018 121.291C302.542 119.794 303.615 117.898 304.114 115.821C304.723 112.674 301.201 112.187 301.201 112.187C301.201 112.187 296.542 108.919 294.451 112.979Z'
          fill='#0C0C0C'
        />
        <path
          d='M301.201 112.197C301.201 112.197 301.445 109.152 306.905 109.649C312.366 110.147 306.905 117.495 311.392 124.367C311.392 124.367 303.14 122.621 302.906 115.232L301.201 112.197Z'
          fill='#0C0C0C'
        />
        <path
          d='M300.867 111.984C301.281 111.759 301.751 111.66 302.22 111.7C302.689 111.739 303.136 111.916 303.506 112.207C305.049 113.222 305.729 116.744 303.293 117.972C303.293 117.972 305.313 113.141 300.867 111.984Z'
          fill='#FFD200'
        />
        <path
          d='M309.93 162.866H325.936C325.936 162.866 327.692 139.521 314.446 136.476C301.201 133.431 309.93 162.866 309.93 162.866Z'
          fill='#064649'
        />
        <path
          opacity='0.46'
          d='M309.93 162.866H325.936C325.936 162.866 327.692 139.521 314.446 136.476C301.201 133.431 309.93 162.866 309.93 162.866Z'
          fill='white'
        />
        <path
          d='M233.48 150.808H257.484V130.782H233.48V150.808Z'
          fill='#0C0C0C'
        />
        <path
          opacity='0.62'
          d='M254.988 147.702L249.264 137.491L245.255 145.053L240.403 138.638L235.541 147.702H254.988Z'
          fill='white'
        />
        <path
          d='M244.371 138.252C245.425 138.252 246.279 137.398 246.279 136.344C246.279 135.29 245.425 134.436 244.371 134.436C243.317 134.436 242.463 135.29 242.463 136.344C242.463 137.398 243.317 138.252 244.371 138.252Z'
          fill='white'
        />
        <path
          opacity='0.05'
          d='M119.274 142.292L106.545 142.637L102.354 215.808H120.624C121.639 212.327 124.278 194.219 134.204 183.734C143.969 173.412 183.838 146.656 169.232 128.589C162.127 119.789 150.19 153.386 150.19 153.386L131.393 155.619L132.682 154.949L119.274 142.292Z'
          fill='black'
        />
        <path
          d='M91.2186 124.022L93.3298 130.345L88.3258 133.522L86.5293 122.57L91.2186 124.022Z'
          fill='#F4A28C'
        />
        <path
          d='M84.8128 116.46C85.0716 115.852 85.4794 115.32 85.9986 114.911C86.5178 114.503 87.1316 114.232 87.7832 114.124C88.4348 114.015 89.1032 114.073 89.7265 114.292C90.3499 114.51 90.9081 114.883 91.3494 115.374C93.4708 117.648 96.0387 121.261 93.1358 123.22C88.7003 126.265 84.62 120.611 84.62 120.611C84.2691 119.239 84.3362 117.794 84.8128 116.46Z'
          fill='#F4A28C'
        />
        <path
          d='M88.0623 120.337C88.0623 120.337 86.9153 119.383 86.4078 120.743C85.9003 122.103 87.8999 122.773 88.4988 122.063C89.0976 121.352 88.0623 120.337 88.0623 120.337Z'
          fill='#F4A28C'
        />
        <path
          d='M78.0121 136.76C78.0121 136.76 57.4482 149.163 54.7381 178.375C54.5045 180.802 55.1523 183.232 56.5632 185.221C57.9741 187.209 60.0537 188.624 62.4217 189.205L86.5279 195.021L78.0121 136.76Z'
          fill='#064649'
        />
        <path
          opacity='0.2'
          d='M78.0121 136.76C78.0121 136.76 57.4482 149.163 54.7381 178.375C54.5045 180.802 55.1523 183.232 56.5632 185.221C57.9741 187.209 60.0537 188.624 62.4217 189.205L86.5279 195.021L78.0121 136.76Z'
          fill='white'
        />
        <path
          d='M86.6463 172.171L55.0488 186.691L64.5422 207.35L96.1397 192.83L86.6463 172.171Z'
          fill='#FF914D'
        />
        <path
          d='M88.6916 118.703C88.6916 118.703 91.0464 125.463 86.9357 125.037C82.8249 124.61 85.0681 121.708 83.0279 118.703C80.9878 115.699 82.0129 113.628 85.1797 111.02C86.6109 109.812 87.565 109.243 88.1435 108.604C88.3855 108.319 88.6957 108.101 89.045 107.968C89.3943 107.836 89.7715 107.794 90.1414 107.847C90.5113 107.899 90.8618 108.045 91.1602 108.269C91.4587 108.494 91.6954 108.791 91.8483 109.132C92.914 111.73 92.9242 115.201 88.6916 118.703Z'
          fill='#0C0C0C'
        />
        <path
          d='M73.2527 142.85C74.2285 140.682 75.6603 138.75 77.4505 137.186C79.2406 135.622 81.347 134.462 83.626 133.786C92.4261 131.147 109.123 125.605 114.076 133.786C120.826 145.042 110.432 189.246 110.432 189.246L80.8652 191.57C80.8652 191.57 64.615 162.247 73.2527 142.85Z'
          fill='#064649'
        />
        <path
          d='M110.413 189.266L106.525 240.067H100.384L94.8932 200.593L81.3125 191.56L110.413 189.266Z'
          fill='#0C0C0C'
        />
        <path
          d='M81.3112 191.56L72.8359 240.067H79.4233L93.6434 199.771L81.3112 191.56Z'
          fill='#0C0C0C'
        />
        <path
          opacity='0.08'
          d='M86.1829 132.994C86.1829 132.994 72.3586 177.512 112.268 180.456L110.411 189.266L80.8643 191.57C74.0748 179.598 70.632 166.02 70.897 152.259C70.897 152.259 71.1508 140.911 79.1388 135.887C81.255 134.434 83.6562 133.448 86.1829 132.994Z'
          fill='black'
        />
        <path
          d='M74.0341 240.067L69.9741 243.112C69.8242 243.225 69.7133 243.382 69.6569 243.561C69.6005 243.741 69.6014 243.933 69.6595 244.112C69.7175 244.29 69.8299 244.447 69.9809 244.558C70.1319 244.67 70.314 244.732 70.5019 244.736H77.3531C77.591 244.736 77.8192 244.642 77.9883 244.475C78.1575 244.307 78.2538 244.08 78.2565 243.843V240.107L74.0341 240.067Z'
          fill='#064649'
        />
        <path
          d='M106.352 240.067L110.199 243.112C110.351 243.227 110.463 243.386 110.518 243.569C110.574 243.751 110.571 243.946 110.509 244.126C110.447 244.306 110.329 244.462 110.174 244.572C110.018 244.681 109.831 244.739 109.641 244.736H104.759C104.069 244.736 103.408 244.462 102.921 243.975C102.434 243.487 102.16 242.826 102.16 242.137V240.107L106.352 240.067Z'
          fill='#064649'
        />
        <path
          d='M166.786 129.229L162.401 127.94L142.923 144.88C141.491 146.12 139.758 146.961 137.897 147.318C136.037 147.674 134.115 147.534 132.326 146.91C127.031 145.109 122.527 141.52 119.588 136.76C112.605 125.433 100.74 129.523 100.74 129.523C100.74 129.523 91.7975 138.333 109.509 153.447C120.086 162.47 130.916 163.038 137.929 162.033C138.785 161.93 139.646 161.873 140.507 161.861C141.336 161.833 142.151 161.65 142.913 161.323C143.855 160.92 144.774 160.462 145.664 159.953C152.85 155.801 160.594 147.012 166.786 129.229Z'
          fill='#064649'
        />
        <path
          opacity='0.2'
          d='M166.786 129.229L162.401 127.94L142.923 144.88C141.491 146.12 139.758 146.961 137.897 147.318C136.037 147.674 134.115 147.534 132.326 146.91C127.031 145.109 122.527 141.52 119.588 136.76C112.605 125.433 100.74 129.523 100.74 129.523C100.74 129.523 91.7975 138.333 109.509 153.447C120.086 162.47 130.916 163.038 137.929 162.033C138.785 161.93 139.646 161.873 140.507 161.861C141.336 161.833 142.151 161.65 142.913 161.323C143.855 160.92 144.774 160.462 145.664 159.953C152.85 155.801 160.594 147.012 166.786 129.229Z'
          fill='white'
        />
        <path
          d='M162.4 127.94C162.4 127.94 164.867 120.835 166.826 120.337C168.785 119.84 166.826 124.133 166.826 124.133C166.826 124.133 172.205 126.772 166.826 129.208L162.4 127.94Z'
          fill='#F4A28C'
        />
        <path
          opacity='0.55'
          d='M183.787 146.656L179.625 151.873C175.199 157.427 173.11 164.486 173.799 171.554L174.601 179.674L186.781 168.611L183.787 146.656Z'
          fill='#878787'
        />
        <path
          opacity='0.55'
          d='M213.008 146.656L217.169 151.873C221.599 157.425 223.689 164.486 222.995 171.554L222.203 179.674L210.023 168.611L213.008 146.656Z'
          fill='#878787'
        />
        <path
          opacity='0.55'
          d='M192.85 170.336C192.85 170.336 196.646 192.666 190.404 194.544C184.162 196.422 181.269 186.343 173.027 192.341C164.785 198.34 175.351 204.948 160.796 203.111C146.241 201.273 140.598 208.449 144.029 215.808H251.446C251.446 215.808 256.836 208.977 250.837 204.329C249.533 203.348 248.033 202.659 246.44 202.308C244.846 201.958 243.196 201.955 241.601 202.299C241.16 202.373 240.709 202.35 240.279 202.23C239.849 202.111 239.45 201.899 239.111 201.608C238.772 201.318 238.501 200.956 238.317 200.549C238.134 200.142 238.042 199.7 238.048 199.254C238.109 197.051 237.733 194.554 236.018 193.032C233.988 191.174 229.674 193.113 226.467 195.062C222.825 197.306 218.539 198.271 214.287 197.802C210.562 197.356 206.745 196.117 205.71 193.052C203.508 186.566 204.847 169.9 204.847 169.9L192.85 170.336Z'
          fill='white'
        />
        <path
          d='M198.412 100.332C198.412 100.332 167.657 117.211 186.79 168.601H210.044C229.176 117.211 198.412 100.332 198.412 100.332Z'
          fill='#C1C1C1'
        />
        <path
          d='M210.045 168.601L209.009 172.539H187.908L186.791 168.134L210.045 168.601Z'
          fill='#878787'
        />
        <path
          d='M198.635 138.374C202.996 138.374 206.532 134.838 206.532 130.477C206.532 126.116 202.996 122.58 198.635 122.58C194.274 122.58 190.738 126.116 190.738 130.477C190.738 134.838 194.274 138.374 198.635 138.374Z'
          fill='#E6E6E6'
        />
        <path
          d='M286.707 58.7674H220.123V104.94H286.707V58.7674Z'
          fill='#F4F4F4'
        />
        <path
          d='M243.366 85.401H235.875V94.9826H243.366V85.401Z'
          fill='#C1C1C1'
        />
        <path
          d='M257.364 78.0321H249.873V94.9826H257.364V78.0321Z'
          fill='#C1C1C1'
        />
        <path
          d='M271.096 70.511H263.605V94.9826H271.096V70.511Z'
          fill='#C1C1C1'
        />
      </svg>
      <ErrorText>
        <h3>{title}</h3>
        <p>{message}</p>
      </ErrorText>
    </ErrorContainer>
  );
};

export default NotFound;
