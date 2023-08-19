import React from 'react';

type Props = {
    svgName: SvgName
}

export type SvgName =
    'follow'
    | 'unFollow'
    | 'arrowLeft'
    | 'arrowDoubleLeft'
    | 'arrowRight'
    | 'arrowDoubleRight'
    | 'profile'
    | 'users'
    | 'dialogs'
    | 'news'
    | 'login'
    | 'password'
    | 'captcha'
    | 'likes'
    | 'delete'
    | 'settings'
    | 'edit'
    | 'photo'
    | 'logout'
    | 'profileLight'
    | 'underDevelopment'
    | 'notFound'

export const SvgSelector = (props: Props) => {
    switch (props.svgName) {
        case 'follow':
            return <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path fill="none" d="M0 0h24v24H0z"/>
                <path
                    d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914 3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"/>
            </svg>
        case 'unFollow':
            return <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path fill="none" d="M0 0h24v24H0z"/>
                <path
                    d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586 2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415L19 17.586z"/>
            </svg>
        case 'arrowLeft':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023Z"
                    fill="#000"
                />
            </svg>
        case 'arrowDoubleLeft':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.854 3.854a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5l3.647-3.646Zm6 0a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.646Z"
                    fill="#000"
                />
            </svg>
        case 'arrowRight':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707Z"
                    fill="#000"
                />
            </svg>
        case 'arrowDoubleRight':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5l-3.647 3.646Zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5l-3.647 3.646Z"
                    fill="#000"
                />
            </svg>
        case 'users':
            return <svg
                style={{marginBottom: '4px'}}
                width={28}
                height={28}
                viewBox="0 -8 72 72"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <defs>
                    <style>{".cls-1{fill:#fff}"}</style>
                </defs>
                <title>{"users"}</title>
                <path
                    className="cls-1"
                    d="M18.87 28.44c.2.21.41.4.63.6a10.59 10.59 0 0 0 14.15 0c.22-.2.43-.39.62-.6s.4-.43.58-.65a10.64 10.64 0 1 0-16.55 0c.18.21.38.44.57.65ZM41.63 25.76c.17.18.35.35.53.52a9 9 0 0 0 12.05 0c.19-.17.36-.34.53-.52a6.41 6.41 0 0 0 .49-.55 9 9 0 0 0-7-14.73 9 9 0 0 0-7 14.73c.07.19.23.38.4.55Z"
                />
                <path
                    className="cls-1"
                    d="M9.49 45.52h34.17a1.57 1.57 0 0 0 1.17-.52 1.24 1.24 0 0 0 .31-1 18.77 18.77 0 0 0-9.9-14.22 12.25 12.25 0 0 1-17.33 0A18.77 18.77 0 0 0 8 44a1.25 1.25 0 0 0 .31 1 1.57 1.57 0 0 0 1.18.52Z"
                />
                <path
                    className="cls-1"
                    d="M9.49 45.52h34.17a1.57 1.57 0 0 0 1.17-.52 1.24 1.24 0 0 0 .31-1 18.77 18.77 0 0 0-9.9-14.22 12.25 12.25 0 0 1-17.33 0A18.77 18.77 0 0 0 8 44a1.25 1.25 0 0 0 .31 1 1.57 1.57 0 0 0 1.18.52Z"
                />
                <path
                    className="cls-1"
                    d="M64 39a16 16 0 0 0-8.42-12.11 10.41 10.41 0 0 1-14.76 0 16.59 16.59 0 0 0-3.13 2.16 18.81 18.81 0 0 1 8.26 11.24h16.78a1.33 1.33 0 0 0 1-.44A1.06 1.06 0 0 0 64 39Z"
                />
            </svg>
        case 'profile':
            return <svg
                fill="#fff"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
                stroke="#fff"
                {...props}
            >
                <path
                    d="m21.71 11.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 1.42 1.42l.29-.3v7.89A1.77 1.77 0 0 0 5.83 22H8.5a1 1 0 0 0 1-1v-4.9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.67A1.77 1.77 0 0 0 20 20.3v-7.89l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
                    style={{
                        fill: "#fff",
                    }}
                />
            </svg>
        case 'dialogs':
            return <svg
                fill="#fff"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                stroke="#fff"
                {...props}
            >
                <path d="m16 16.8 13.8-9.2C29.2 5.5 27.3 4 25 4H7C4.7 4 2.8 5.5 2.2 7.6L16 16.8z"/>
                <path
                    d="M16.6 18.8c-.2.1-.4.2-.6.2s-.4-.1-.6-.2L2 9.9V23c0 2.8 2.2 5 5 5h18c2.8 0 5-2.2 5-5V9.9l-13.4 8.9z"/>
            </svg>
        case 'news':
            return <svg
                fill="#fff"
                width={20}
                height={20}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                {...props}
            >
                <title>{"ionicons-v5-n"}</title>
                <path
                    d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32 32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112Z"/>
                <path
                    d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15 1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416ZM96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144Z"/>
            </svg>
        case 'login':
            return <svg
                width={18}
                height={16}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M12 11a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM3 22v-4a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v4a1 1 0 0 1-2 0Z"/>
            </svg>
        case 'password':
            return <svg
                width={18}
                height={15}
                viewBox="0 0 128 128"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M64 1C47.5 1 34 14.5 34 31v26H15v70h99V57H94V31C94 14.5 80.5 1 64 1zM42 31c0-12.1 9.9-22 22-22s22 9.9 22 22v26H42V31zm64 34v54H23V65h83z"/>
                <path d="M60 81h8v22h-8z"/>
            </svg>
        case 'captcha':
            return <svg
                width={18}
                height={18}
                viewBox="0 0 48 48"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M32.615 10.883V8.615A8.614 8.614 0 0 0 24 0a8.615 8.615 0 0 0-8.615 8.615v2.268H12.33V28h23.34V10.883h-3.055zm-6.183 11.832h-4.734l1.175-2.963a2.522 2.522 0 0 1-1.406-2.257 2.534 2.534 0 1 1 5.067 0c0 .98-.561 1.82-1.375 2.243l1.273 2.977zm-7.42-11.832V8.615a4.988 4.988 0 0 1 9.976 0v2.268h-9.976zM0 32v16h48V32H0zm44 12H4v-8h40v8z"
                    fill="#241F20"
                />
                <path fill="#241F20" d="M11 38.5h6v3h-6zM21 38.5h6v3h-6zM31 38.5h6v3h-6z"/>
            </svg>
        case 'likes':
            return <svg
                fill="#1d2f38"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="-0.5 0.5 42 42"
                xmlSpace="preserve"
                {...props}
            >
                <path
                    d="M20.938 10.725C14.51.796 1.5 6.205 1.5 17.021c0 8.122 17.836 20.827 19.438 22.479C22.551 37.848 39.5 25.143 39.5 17.021c0-10.734-12.122-16.225-18.562-6.296z"/>
            </svg>
        case 'delete':
            return <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M6 7H5m1 0h2m10 0h1m-1 0h-2m-6 4v5m4-5v5M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 7h8"
                    stroke="red"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        case 'edit':
            return <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m18.94 3.12 2.122 2.122a3 3 0 0 1 0 4.243l-1.803 1.803-6.364-6.364 1.803-1.803a3 3 0 0 1 4.242 0Zm-7.106 2.865-8.127 8.127a3 3 0 0 0-.861 1.797l-.394 3.617a2 2 0 0 0 2.204 2.205l3.618-.394a3 3 0 0 0 1.796-.86l8.128-8.128-6.364-6.364Z"
                    fill="#000"
                />
            </svg>
        case 'photo':
            return <svg
                width={40}
                height={40}
                viewBox="-1 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="cf-icon-svg"
                {...props}
            >
                <path
                    d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.874-2.287a.803.803 0 0 0-.8-.8h-2.054v-.251a.802.802 0 0 0-.8-.8h-2.93a.802.802 0 0 0-.8.8v.25H4.186a.802.802 0 0 0-.8.8v5.166a.802.802 0 0 0 .8.8h8.639a.803.803 0 0 0 .8-.8zm-2.692 2.582a2.427 2.427 0 1 1-2.428-2.427 2.428 2.428 0 0 1 2.428 2.427zm-4.055 0a1.627 1.627 0 1 0 1.627-1.627A1.63 1.63 0 0 0 6.88 9.795zm2.75-3.931a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4z"/>
            </svg>
        case 'logout':
            return <svg
                fill="#fff"
                width={22}
                height={22}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                }}
                stroke="#fff"
                {...props}
            >
                <path
                    d="M25.229 14.5H9.226a1.5 1.5 0 0 0 0 3h16.038l-3.114 3.114a1.501 1.501 0 0 0 2.122 2.121l4.242-4.242a3.5 3.5 0 0 0 0-4.95L24.272 9.3a1.502 1.502 0 0 0-2.122 0 1.502 1.502 0 0 0 0 2.122l3.079 3.078Z"/>
                <path
                    d="M20 24v-4.5H9.226a3.501 3.501 0 0 1-3.5-3.5c0-1.932 1.568-3.5 3.5-3.5H20V8a5 5 0 0 0-5-5H8a5.004 5.004 0 0 0-3.536 1.464A5.004 5.004 0 0 0 3 8v16c0 1.326.527 2.598 1.464 3.536A5.004 5.004 0 0 0 8 29h7a5.004 5.004 0 0 0 3.536-1.464A5.004 5.004 0 0 0 20 24Z"/>
            </svg>
        case 'profileLight':
            return <svg
                width={22}
                height={22}

                viewBox="0 0 32 32"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                stroke="#fff"
                {...props}
            >
                <g fill="none" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2}>
                    <circle cx={16} cy={16} r={15}/>
                    <path d="M26 27c0-5.523-4.477-10-10-10S6 21.477 6 27"/>
                    <circle cx={16} cy={11} r={6}/>
                </g>
            </svg>
        case 'underDevelopment':
            return <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={120}
                viewBox="0 0 495.555 495.555"
                xmlSpace="preserve"
                {...props}
            >
                <g fill="#333">
                    <path d="M427.783,164.441l-52.929-11.819l-19.526-50.585l62.807-72.904c-31.662-5.652-65.398,4.982-87.908,31.116
			c-25.054,29.089-29.128,69.08-13.703,101.688c-0.287,0.315-0.631,0.545-0.918,0.87l-59.135,68.649l52.164,56.658l64.929-75.372
			c0.277-0.325,0.459-0.698,0.727-1.033c34.53,10.424,73.479,0.469,98.532-28.611c22.511-26.134,28.037-61.066,17.758-91.542
			L427.783,164.441z"/>
                    <path d="M106.531,405.513c-12.928,15.004-11.236,37.647,3.768,50.576l3.625,3.117c15.003,12.929,37.647,11.236,50.576-3.768
			l81.319-94.401l-52.164-56.657L106.531,405.513z"/>
                    <path d="M302.352,295.4l-52.163-56.659l-68.926-74.855c-0.287-0.315-0.65-0.526-0.947-0.832c0.669-1.549,1.282-3.127,1.865-4.705
			c0.593-1.616,1.147-3.242,1.654-4.877c9.572-30.973,2.964-66.039-20.578-91.608c-23.361-25.379-57.433-34.894-88.884-28.2
			l65.178,70.792l-17.844,51.207l-52.508,13.56L4.021,98.432c-9.266,30.801-2.591,65.532,20.779,90.911
			c23.533,25.551,57.911,35.037,89.553,28.065c1.683-0.372,3.366-0.783,5.03-1.243c1.625-0.449,3.242-0.927,4.848-1.472
			c0.277,0.324,0.469,0.688,0.755,1.004l74.941,81.386l52.163,56.658l89.878,97.614c7.067,7.679,16.716,11.57,26.393,11.57
			c8.684,0,17.385-3.137,24.279-9.477l3.52-3.241c14.573-13.416,15.51-36.099,2.094-50.672L302.352,295.4z"/>
                </g>
            </svg>
        case 'notFound' :
            return <svg
                width='360'
                height='360'
                className="w-100"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1074.392 584.231"
                {...props}
            >
                <title>{"page not found"}</title>
                <ellipse cx={540.643} cy={549.309} rx={527.5} ry={34.922} fill="#f2f2f2"/>
                <path
                    d="M520.426 167.01c-85.944 0-147.651 55.14-147.651 183.798 0 145.813 61.707 184.41 147.65 184.41s151.328-42.273 151.328-184.41c0-151.94-65.383-183.798-151.327-183.798Zm.565 319.808c-59.527 0-90.626-34.923-90.626-135.916 0-89.112 32.372-136.105 91.899-136.105s91.899 30.868 91.899 136.105c0 98.447-33.645 135.916-93.172 135.916Z"
                    fill="#2f2e41"
                />
                <path
                    d="M321.311 433.517h-35.534v-104.64a20.956 20.956 0 0 0-20.956-20.956h-8.326a20.956 20.956 0 0 0-20.956 20.956v104.64h-100.23a11.963 11.963 0 0 1-10.578-17.552l106.083-200.78a20.956 20.956 0 0 0-9.58-28.74l-6.263-2.957a20.956 20.956 0 0 0-27.43 9.07L58.162 434.591a28.416 28.416 0 0 0-3.357 13.396 28.416 28.416 0 0 0 28.416 28.416H235.54v66.167a25.119 25.119 0 0 0 25.119 25.12 25.119 25.119 0 0 0 25.119-25.12v-66.167h35.534a21.443 21.443 0 0 0 21.443-21.443 21.443 21.443 0 0 0-21.443-21.443ZM979.308 433.517h-35.534v-104.64a20.956 20.956 0 0 0-20.956-20.956h-8.327a20.956 20.956 0 0 0-20.956 20.956v104.64h-100.23a11.963 11.963 0 0 1-10.577-17.552l106.082-200.78a20.956 20.956 0 0 0-9.58-28.74l-6.263-2.957a20.956 20.956 0 0 0-27.429 9.07L716.157 434.591a28.416 28.416 0 0 0-3.356 13.396 28.416 28.416 0 0 0 28.416 28.416h152.318v66.167a25.119 25.119 0 0 0 25.12 25.12 25.119 25.119 0 0 0 25.118-25.12v-66.167h35.535a21.443 21.443 0 0 0 21.443-21.443 21.443 21.443 0 0 0-21.443-21.443Z"
                    fill="#007bff"
                />
                <path
                    d="M331.114 421.264H295.58v-104.64a20.956 20.956 0 0 0-20.956-20.956h-8.327a20.956 20.956 0 0 0-20.956 20.956v104.64h-100.23a11.963 11.963 0 0 1-10.577-17.552l106.082-200.78a20.956 20.956 0 0 0-9.58-28.74l-6.263-2.957a20.956 20.956 0 0 0-27.429 9.07L67.963 422.338a28.416 28.416 0 0 0-3.356 13.396 28.416 28.416 0 0 0 28.416 28.416H245.34v66.167a25.119 25.119 0 0 0 25.12 25.119 25.119 25.119 0 0 0 25.119-25.12V464.15h35.534a21.443 21.443 0 0 0 21.443-21.443 21.443 21.443 0 0 0-21.443-21.443ZM997.688 421.264h-35.535v-104.64a20.956 20.956 0 0 0-20.956-20.956h-8.326a20.956 20.956 0 0 0-20.956 20.956v104.64h-100.23a11.963 11.963 0 0 1-10.577-17.552l106.082-200.78a20.956 20.956 0 0 0-9.58-28.74l-6.263-2.957a20.956 20.956 0 0 0-27.43 9.07l-129.38 242.033a28.416 28.416 0 0 0-3.356 13.396 28.416 28.416 0 0 0 28.415 28.416h152.32v66.167a25.119 25.119 0 0 0 25.118 25.119 25.119 25.119 0 0 0 25.12-25.12V464.15h35.534a21.443 21.443 0 0 0 21.443-21.443 21.443 21.443 0 0 0-21.443-21.443ZM540.03 155.982c-85.943 0-147.65 55.14-147.65 183.798 0 145.813 61.707 184.41 147.65 184.41s151.328-42.273 151.328-184.41c0-151.94-65.383-183.798-151.327-183.798Zm.566 319.808c-59.527 0-90.626-34.923-90.626-135.916 0-89.112 32.372-136.105 91.899-136.105s91.899 30.868 91.899 136.105c0 98.447-33.645 135.916-93.172 135.916Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <circle cx={471.141} cy={18.25} r={12.901} fill="#2f2e41"/>
                <ellipse cx={502.607} cy={46.885} rx={36.186} ry={46.885} fill="#2f2e41"/>
                <path
                    d="M502.607 79.61c-18.127 0-33.14-17.27-35.775-39.805a60.976 60.976 0 0 0-.41 7.08c0 25.893 16.2 46.885 36.185 46.885s36.187-20.991 36.187-46.885a60.976 60.976 0 0 0-.41-7.08c-2.635 22.534-17.649 39.805-35.777 39.805Z"
                    opacity={0.1}
                />
                <path
                    d="M576.242 184.189c-.777 3.193-4.128 5.75-7.839 7.538-7.801 3.756-17.425 4.878-26.76 5.254a45.176 45.176 0 0 1-7.144-.132 20.537 20.537 0 0 1-12.25-5.632 1.68 1.68 0 0 1 .043-2.843c4.97-5.46 13.263-8.806 21.617-11.217 6.334-1.827 17.38-6.56 24.29-5.922 6.691.62 9.024 8.922 8.043 12.954Z"
                    fill="#3f3d56"
                />
                <path
                    d="M576.242 184.189c-.777 3.193-4.128 5.75-7.839 7.538-7.801 3.756-17.425 4.878-26.76 5.254a45.176 45.176 0 0 1-7.144-.132 20.537 20.537 0 0 1-12.25-5.632 1.68 1.68 0 0 1 .043-2.843c4.97-5.46 13.263-8.806 21.617-11.217 6.334-1.827 17.38-6.56 24.29-5.922 6.691.62 9.024 8.922 8.043 12.954Z"
                    opacity={0.1}
                />
                <path
                    d="M477.044 160.321a19.77 19.77 0 0 0-1.199 15.075 26.34 26.34 0 0 0 8.83 12.497c10.094 8.092 23.987 9.205 36.924 9.093a284.65 284.65 0 0 0 33.905-2.324 40.538 40.538 0 0 0 11.002-2.554c4.222-1.827 7.933-5.178 9.436-9.526s.436-9.673-3.134-12.574c-3.137-2.55-7.463-2.9-11.498-3.143l-23.087-1.388c2.28-2.308 5.318-3.614 8.095-5.292 3.686-2.226 6.134-5.965 8.814-9.335a129.001 129.001 0 0 1 13.438-13.817c.752 4.31 3.478 7.85 6.688 10.824s6.908 5.369 10.243 8.2c8.079 6.859 13.896 16.167 22.393 22.5a43.829 43.829 0 0 0 16.048-8.011l-3.302-5.982a3.94 3.94 0 0 0-1.244-1.553c-.935-.575-2.14-.278-3.225-.441-2.901-.435-4.168-3.784-5.306-6.487-3.125-7.422-9.108-13.18-14.218-19.404a98.009 98.009 0 0 1-9.996-14.723c-1.717-3.102-3.288-6.331-5.618-9.003s-5.593-4.773-9.138-4.78c-3.132-.007-6.021 1.583-8.714 3.182a230.477 230.477 0 0 0-23.63 16.1c-3.944 3.061-7.864 6.296-12.49 8.173-1.947.79-4 1.33-5.869 2.292-3.273 1.685-5.757 4.535-8.431 7.065-9.538 9.023-22.596 14.869-35.717 15.336Z"
                    fill="#3f3d56"
                />
                <path
                    d="M525.32 96.098a23.774 23.774 0 0 1-1.734 8.033 10.045 10.045 0 0 1-5.768 5.573 12.375 12.375 0 0 1-5.623.183 10.882 10.882 0 0 1-4.581-1.561c-2.165-1.489-3.245-4.144-3.638-6.743-.393-2.596-.217-5.249-.469-7.864a42.944 42.944 0 0 0-1.202-6.255c-.17-.683-.343-1.363-.513-2.042-.166-.68-.33-1.36-.481-2.04a44.287 44.287 0 0 1-.378-1.925 28.716 28.716 0 0 1-.233-1.643 18.423 18.423 0 0 0-.808-4.811 14.607 14.607 0 0 0-1.687-2.854c-.286-.409-.563-.818-.818-1.243a5.89 5.89 0 0 1-.972-3.748 3.286 3.286 0 0 1 .148-.6c.025-.076.053-.152.085-.224a1.802 1.802 0 0 0 1.23-1.149 3.433 3.433 0 0 0-.148-1.777 11.318 11.318 0 0 0-.96-2.288c-.264-.478-1.16-1.34-1.167-1.888-.013-1.101 2.14-1.989 3.011-2.423a16.796 16.796 0 0 1 8.597-1.743c1.904.129 3.968.714 5.019 2.31.944 1.438.818 3.3 1.22 4.971a1.47 1.47 0 0 0 .3.664 1.341 1.341 0 0 0 .74.34 4.55 4.55 0 0 0 1.415.057h.003a2.931 2.931 0 0 0 .371-.054 4.957 4.957 0 0 0 2.033-.878q.586-.156 1.18-.255a.251.251 0 0 0 .047-.01c1.577 4.976 1.781 10.31 3.072 15.375.638 2.52 1.554 5.01 1.683 7.603.01.113.013.23.016.346.019.834-.047 1.674-.013 2.504a6.981 6.981 0 0 0 .126 1.114 15.611 15.611 0 0 0 .525 1.744l.01.028c.06.182.116.368.164.554.034.135.066.267.09.402l.004.01a14.938 14.938 0 0 1 .104 4.207Z"
                    fill="#fbbebe"
                />
                <circle cx={503.237} cy={44.997} r={18.565} fill="#fbbebe"/>
                <path
                    d="M621.103 146.148a30.445 30.445 0 0 0-5.236-14.103q.722 4.295 1.448 8.587a3.214 3.214 0 0 1-3.367-1.035 10.337 10.337 0 0 1-1.766-3.276 67.466 67.466 0 0 0-8.21-14.735c-11.818-.985-23.501-5.884-33.895-11.596-10.396-5.708-20.125-12.552-30.383-18.502a43.573 43.573 0 0 0-5.545-2.832c-3.21-1.287-6.812-1.954-9.855-3.467-.205-.101-.41-.208-.61-.318a12.578 12.578 0 0 1-1.945-1.306 10.344 10.344 0 0 1-.931-.856 20.351 20.351 0 0 1-3.56-5.953c-1.632-3.613-2.215-7.97-3.845-11.583a11.203 11.203 0 0 1 2.502-1.765h.003c.132-.07.265-.136.4-.199a11.94 11.94 0 0 1 2.004-.733q.586-.156 1.18-.255a.251.251 0 0 0 .047-.01 11.566 11.566 0 0 1 5.491.435c2.587.875 4.767 2.621 6.942 4.273a114.02 114.02 0 0 1 10.148 8.05c1.793 1.717 3.43 3.605 5.358 5.166a42.144 42.144 0 0 0 5.057 3.351q15.656 9.327 31.315 18.65c3.534 2.105 7.07 4.21 10.526 6.438 5.248 3.386 10.308 7.055 15.365 10.72q4.47 3.239 8.936 6.48a9.728 9.728 0 0 1 2.533 2.34 8.472 8.472 0 0 1 1.123 3.434 31.387 31.387 0 0 1-1.23 14.6Z"
                    fill="#fbbebe"
                />
                <path
                    d="M529.923 110.06c-1.252 5.616-6.929 9.012-9.896 13.945-3.688 6.124-2.184 13.241-.8 20.255q-3.794 3.271-7.592 6.542c-1.397 1.199-2.794 2.404-4.298 3.465a57.35 57.35 0 0 1-6.86 3.94q-3.36 1.727-6.721 3.457a32.128 32.128 0 0 1-6.58 2.788c-4.414 1.133-9.103.34-13.47-.972a6.088 6.088 0 0 1-1.473-.601 2.394 2.394 0 0 1-.699-.633 3.91 3.91 0 0 1-.443-2.539c.443-7.35 2.24-14.547 4.03-21.69a85.26 85.26 0 0 1 3.849-12.577 85.077 85.077 0 0 1 5.415-10.15 68.368 68.368 0 0 1 7.93-11.514 18.479 18.479 0 0 0 3.675-4.739c1.117-2.549.686-5.472.913-8.247a17.148 17.148 0 0 1 1.633-6.007v-.003a17.093 17.093 0 0 1 1.743-2.883l.916 2.13q.302.7.597 1.395.387.896.768 1.787l2.197 5.113a21.59 21.59 0 0 0 3.335 5.944 6.5 6.5 0 0 0 11.123-.853 21.261 21.261 0 0 0 2.272-6.013 19.215 19.215 0 0 0 .252-7.835c-.758-5.01-2.889-10.126-4.437-14.78a14.945 14.945 0 0 1-1.08-4.87 3.351 3.351 0 0 1 .057-.56l.029-.146a11.94 11.94 0 0 1 2.004-.733q.585-.155 1.18-.255 2.044 11.064 4.094 22.128c.031.173.066.346.097.522.196 1.057.394 2.114.614 3.169.198.956.412 1.91.651 2.857l.01.028c.082.321.167.639.255.957l.003.009c.242.868.513 1.73.818 2.58 1.85 5.12 5.076 10.274 3.89 15.589Z"
                    fill="#007bff"
                />
                <path
                    d="M605.267 188.993a6.583 6.583 0 0 0 .61 3.143c1.162 2.123 3.95 2.606 6.363 2.805a188.377 188.377 0 0 0 42.265-1.288 4.886 4.886 0 0 0 2.152-.668c1.99-1.395.763-4.795-1.41-5.883s-4.751-.826-7.135-1.298a22.48 22.48 0 0 1-6.678-2.896q-7.252-4.167-14.293-8.688c-2.794-1.795-6.093-3.71-9.24-2.646-8.525 2.884-12.69 8.222-12.634 17.419Z"
                    fill="#3f3d56"
                />
                <path
                    d="M501.383 82.99v.002a7.75 7.75 0 0 1-.072.39c-.035.215-.076.432-.116.646a77.708 77.708 0 0 1-1.42 5.962c-1.51 5.46-3.533 10.831-5.54 16.124L478.07 148.69c-1.36 3.574-2.716 7.152-4.26 10.654-.517 1.168-1.048 2.344-1.577 3.534-1.894 4.257-3.713 8.653-4.317 13.184a27.45 27.45 0 0 0-.192 9.04c.604 2.97 2.407 5.872 5.23 6.97 1.378.538 3.35 1.259 2.973 2.69-.204.787-1.098 1.171-1.9 1.303a7.312 7.312 0 0 1-5.966-1.718c-1.508-1.337-2.666-3.417-4.67-3.64-1.388-.151-2.665.68-3.936 1.261-5.186 2.37-11.228.712-16.674-.972.427-2.206 2.643-3.66 4.842-4.1 2.2-.444 4.475-.129 6.718-.189a3.51 3.51 0 0 0 2.042-.525 3.705 3.705 0 0 0 1.102-1.882 78.964 78.964 0 0 0 3.212-13.146c.724-4.667 1.026-9.406 2.058-14.016.803-3.596 2.042-7.08 3.106-10.61a224.682 224.682 0 0 0 5.06-22.077 78.02 78.02 0 0 0 1.425-9.367c.18-2.612.095-5.236.346-7.839a60.888 60.888 0 0 1 2.112-9.996l2.885-10.69c1.426-5.27 2.955-10.745 6.567-14.842a13.962 13.962 0 0 1 10.029-4.79 9.882 9.882 0 0 1 2.13.23c.116.029.233.057.349.089a8.634 8.634 0 0 1 2.174.9c1.114-.709 1.68-.46 2.42.632a6.973 6.973 0 0 1 .881 3.795 52.424 52.424 0 0 1-.856 10.415Z"
                    fill="#fbbebe"
                />
                <path
                    d="m502.607 87.162-.047.047-.255.255-2.53 2.526-1.24-5.207-4.25-17.854a9.882 9.882 0 0 1 2.13.23 3.286 3.286 0 0 1 .148-.602l.201.69 1.441 4.902 2.728 9.308.45 1.532v.003Z"
                    fill="#007bff"
                />
                <path
                    d="M518.661 30.203a12.582 12.582 0 0 1-3.7 8.896 12.314 12.314 0 0 1-1.36 1.176 12.528 12.528 0 0 1-7.536 2.524h-15.096a12.59 12.59 0 0 1 0-25.18h15.096a12.63 12.63 0 0 1 12.596 12.584Z"
                    fill="#2f2e41"
                />
                <circle cx={532.815} cy={18.25} r={12.901} fill="#2f2e41"/>
                <path
                    d="M532.5 5.35c-.158 0-.315.006-.472.011a12.898 12.898 0 0 1 0 25.779c.157.005.314.012.472.012a12.901 12.901 0 1 0 0-25.803ZM471.141 5.35c.158 0 .315.006.472.011a12.898 12.898 0 0 0 0 25.779c-.157.005-.314.012-.472.012a12.901 12.901 0 0 1 0-25.803ZM513.6 40.275a12.528 12.528 0 0 1-7.535 2.524h-15.096a12.528 12.528 0 0 1-7.536-2.524Z"
                    opacity={0.1}
                />
                <path
                    d="M611.086 133.756s3.252 9.372 6.229 6.876l-2.373-12.25Z"
                    fill="#fbbebe"
                />
                <path
                    d="M1006.864 419.55a20.813 20.813 0 1 0 2.771-39.916l.521 10.713-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.408 20.408 0 0 0-1.198 5.63 20.809 20.809 0 0 0 13.657 21.03Z"
                    fill="#57b894"
                />
                <path
                    d="M1031.941 543.793c-1.789-9.11 5.963-17.187 13.621-22.436s16.605-10.408 19.218-19.317c3.755-12.804-7.43-24.53-16.136-34.642a125.3 125.3 0 0 1-16.523-24.557c-1.812-3.533-3.476-7.226-3.953-11.167-.686-5.675 1.137-11.323 2.974-16.736q9.18-27.052 19.629-53.65"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M1007.72 416.792a20.813 20.813 0 1 0 2.773-39.916l.52 10.713-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.408 20.408 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.03Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M1029.397 357.588a20.788 20.788 0 0 1 14.98-13.197l1.714 10.183 3.177-10.695a20.81 20.81 0 1 1-19.87 13.71Z"
                    fill="#57b894"
                />
                <path
                    d="M1030.54 353.91a20.788 20.788 0 0 1 14.98-13.197l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M1044.99 467.604a20.81 20.81 0 0 0 18.42-37.022l-2.441 8.219-1.732-10.304a.362.362 0 0 0-.053-.02 20.811 20.811 0 1 0-14.193 39.127Z"
                    fill="#57b894"
                />
                <path
                    d="M1045.981 463.88a20.81 20.81 0 0 0 18.419-37.023l-2.441 8.22-1.731-10.305a.362.362 0 0 0-.053-.02 20.811 20.811 0 1 0-14.194 39.128Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M1023.324 502.167a20.801 20.801 0 1 0 4.01-16.297l9.273 13.956-12.67-7.408a20.616 20.616 0 0 0-.613 9.749Z"
                    fill="#57b894"
                />
                <path
                    d="M1024.18 499.409a20.801 20.801 0 1 0 4.012-16.297l9.272 13.956-12.67-7.407a20.616 20.616 0 0 0-.613 9.748Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M9.007 470.249a13.674 13.674 0 1 0 1.821-26.225l.343 7.038-3.33-6.032a13.623 13.623 0 0 0-7.02 7.702 13.409 13.409 0 0 0-.786 3.7 13.672 13.672 0 0 0 8.972 13.817Z"
                    fill="#57b894"
                />
                <path
                    d="M25.484 551.879c-1.176-5.986 3.918-11.292 8.949-14.741s10.91-6.838 12.626-12.692c2.467-8.412-4.881-16.116-10.601-22.76a82.324 82.324 0 0 1-10.856-16.135 22.21 22.21 0 0 1-2.597-7.336c-.451-3.729.747-7.44 1.954-10.996q6.03-17.774 12.896-35.25"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M9.57 468.437a13.674 13.674 0 1 0 1.822-26.225l.342 7.038-3.33-6.032a13.623 13.623 0 0 0-7.02 7.702 13.41 13.41 0 0 0-.786 3.699 13.672 13.672 0 0 0 8.973 13.818Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M23.812 429.539a13.658 13.658 0 0 1 9.842-8.671l1.126 6.69 2.088-7.026a13.673 13.673 0 1 1-13.056 9.007Z"
                    fill="#57b894"
                />
                <path
                    d="M24.563 427.123a13.658 13.658 0 0 1 9.842-8.671l1.126 6.69 2.088-7.026a13.673 13.673 0 1 1-13.056 9.007Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M34.058 501.822a13.673 13.673 0 0 0 12.101-24.325l-1.604 5.4-1.137-6.77a.238.238 0 0 0-.035-.013 13.673 13.673 0 1 0-9.325 25.708Z"
                    fill="#57b894"
                />
                <path
                    d="M34.708 499.374A13.673 13.673 0 0 0 46.81 475.05l-1.604 5.4-1.137-6.77a.238.238 0 0 0-.035-.013 13.673 13.673 0 1 0-9.326 25.707Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M19.822 524.53a13.667 13.667 0 1 0 2.635-10.708l6.092 9.17-8.324-4.867a13.545 13.545 0 0 0-.403 6.405Z"
                    fill="#57b894"
                />
                <path
                    d="M20.385 522.718a13.667 13.667 0 1 0 2.635-10.708l6.092 9.17-8.324-4.867a13.545 13.545 0 0 0-.403 6.405Z"
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <ellipse cx={480.946} cy={319.115} rx={17} ry={22} fill="#2f2e41"/>
                <ellipse cx={573.446} cy={319.615} rx={17} ry={22} fill="#2f2e41"/>
                <path
                    d="M560.446 384.615c0 9.94-13.88 18-31 18s-31-8.06-31-18c0-8.61 10.41-15.81 24.32-17.57a50.104 50.104 0 0 1 6.68-.43 50.699 50.699 0 0 1 11.13 1.2c11.62 2.59 19.87 9.14 19.87 16.8Z"
                    fill="#2f2e41"
                />
                <ellipse
                    cx={484.946}
                    cy={314.115}
                    rx={17}
                    ry={22}
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <ellipse
                    cx={577.446}
                    cy={314.615}
                    rx={17}
                    ry={22}
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <ellipse
                    cx={533.446}
                    cy={379.615}
                    rx={31}
                    ry={18}
                    fill="none"
                    stroke="#3f3d56"
                    strokeMiterlimit={10}
                />
                <path
                    d="M540.946 369.316a4.937 4.937 0 0 1-1.32 3.392 4.339 4.339 0 0 1-3.18 1.407h-10a4.664 4.664 0 0 1-4.5-4.8 4.905 4.905 0 0 1 .82-2.74 47.02 47.02 0 0 1 6.68-.46 47.665 47.665 0 0 1 11.13 1.28 5.067 5.067 0 0 1 .37 1.92Z"
                    fill="#fff"
                />
                <circle cx={484.946} cy={308.115} r={5} fill="#fff"/>
                <circle cx={577.946} cy={308.115} r={5} fill="#fff"/>
                <circle cx={582.946} cy={355.115} r={5} fill="#007bff" opacity={0.3}/>
                <circle cx={460.946} cy={355.115} r={5} fill="#007bff" opacity={0.3}/>
            </svg>

        default:
            return <svg></svg>
    }
};

