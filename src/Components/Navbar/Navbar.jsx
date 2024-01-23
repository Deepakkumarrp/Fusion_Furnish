import React, { useEffect, useRef, useState } from 'react'
import logo from "./NavbarImages/Logo.svg"
import FusionFurnishLogo from "./NavbarImages/FusionFurnishLogo.png"
import cart from "./NavbarImages/Cart.svg"
import search from "./NavbarImages/SearchIcon.svg"
import burger from "./NavbarImages/BurgerMenu.svg"
import cross from "./NavbarImages/Cross.svg"
import human from "./NavbarImages/human-icon.svg"
import style from "./Navbar.module.css"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSofas } from '../Products/productRedux/productAction'
import { useAuth0 } from "@auth0/auth0-react";
import { ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT, LOGGED_IN, LOGGED_OUT } from '../Products/productRedux/productActionTypes'



// import { AddProductType } from '../ProductPage/ProductReducer/action'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { userLogout } from '../Login/redux/action'
// import SearchData from './SearchData'

const Navbar = () => {
    const [clickedHumburger, setClickedHumburger] = useState(false)
    const [dropDownLogin, setDropDownLogin] = useState(false)
    const [dropDownSearch, setDropDownSearch] = useState(false)
    const [isAuth, setisAuth] = useState(false);
    // const [userName, setUsername] = useState('Deepak');
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const dispatch = useDispatch();
    // console.log(user);
    const popup = useSelector((state)=>state.cart);

    // change here to see Admin Panel
    // const [isAdmin , setisAdmin] = useState(false);

    const {isAdmin,isLogin} = useSelector(state => state)
    useEffect(() => {
        if(user?.sub == 'auth0|65ad155693eea987226f2bae' || user?.email_verified === true){
            // setisAdmin(true);
            dispatch({type: ADMIN_LOGGED_IN})
        }else{
            // setisAdmin(false);
            dispatch({type: ADMIN_LOGGED_OUT})
        }
    },[user])

    useEffect(() => {
        isAuthenticated ? dispatch({type:LOGGED_IN}) : dispatch({type:LOGGED_OUT})
    },[isAuthenticated])
   

    // const isAuth = useSelector((store) => store.AuthReducer.isAuth);
    // const userName = useSelector((store) => store.AuthReducer.name);
    // const [insideOpen, setInsideOpen] = useState(false);
    const prev = useRef()

    // const handleProductType = (productType) => {
    //     AddProductType(dispatch, productType);
    // }

    // const dispatch = useDispatch()
    const [searchResults, setsearchResults] = useState("");
    const [close, setClose] = useState(false)
    const store = useSelector(store => store)
    
    // const debounce = useRef();
    // const [searchedData, setSearchedData] = useState([])
    // const navigate = useNavigate();

    //=====================>>
    // const data = useSelector((store) => store.CartReducer)

    // let details = data.reduce((acc, e) => {
    //     return { ...acc, qty: acc.qty + e.qty }
    // }, { qty: 0 })
    // //=====================>>
    // useEffect(() => {
    //     clearTimeout(debounce.current);
    //     debounce.current = setTimeout(() => {
    //         const data = SearchData(searchResults)
    //         // console.log(data)
    //         let arr = []
    //         for (let i = 1; i <= data.length; i++) {
    //             if (i <= 3) {
    //                 arr.push(data[i - 1])
    //             }
    //         }
    //         setSearchedData(arr)
    //         setClose(true)
    //     }, 500);
    // }, [searchResults])


// Written by raushan
    // {isAuthenticated && <span id='span'>Hi {user.name}</span>}
    //                     {isAuthenticated ?(
    //                        <Nav.Link> <Button variant="primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    //                         Log Out
    //                     </Button></Nav.Link>
    //                     ):(
    //                         <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>
    //                     )}

    console.log(store);
    return (
        <div id='navbar_container' >
            {/* ----------Navbar for Laptop Screen Starts Here ------------ */}
            <div className={style.navbar_bigscreen}>
            {/* <pre><code>{JSON.stringify(store,null,2)}</code></pre> */}

                <div className={style.logo_navbar}><Link to={"/"}><img src={FusionFurnishLogo} alt="Logo" /></Link></div>
                <div className={style.navbar_content_container}>
                    <div className={style.navbar_top}>
                        <div>
                            <p><Link to={"/"} className={style.link}>Home</Link></p>
                            <p><Link to={"/payment"} className={style.link}>Payment</Link></p>
                            <p><Link to={"#"} className={style.link}>Blog</Link></p>
                            <p><Link to={"/about"} className={style.link}>About us</Link></p>
                            <p><Link to={"/admin/products"} className={style.link}>Admin</Link></p>
                        </div>
                        <div>
                            <div className={style.search_icon}>
                                <input type="text" placeholder='Search Items...' value={prev.current} onChange={(e) => { prev.current = e.target.value; setsearchResults(e.target.value); }} />
                                <img src={search} alt="" />
                                {/* {
                                    searchResults.length > 0 ? (<div className={style.searchDropdown}>
                                        {
                                            searchedData.length ? (searchedData.map((e) => {
                                                return (
                                                    <div key={e.id} onClick={() => { navigate(`/product/productdetails/${e.t}/${e.id}`); setsearchResults("") }}>{e.title}</div>
                                                )
                                            })) : (<div>No Results...</div>)
                                        }
                                    </div>) : (<></>)
                                } */}
                            </div>
                            {/* By Raushan */}
                            {/* <span><Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button></span> */}
                            {/* {isAuthenticated && <span id='span'>Hi {user.name}</span>}
                        {isAuthenticated ?(
                           <Nav.Link> <Button variant="primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </Button></Nav.Link>
                        ):(
                            <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>
                        )} */}
                            {
                                !isAuthenticated ? (<p><Link to={"/login"} onClick={() => loginWithRedirect()} className={style.link}><b>Login</b></Link></p>) : (<div className={style.humanIcon}><img src={human} alt="" onClick={() => { setDropDownLogin(!dropDownLogin); setDropDownSearch(false) }} />
                                    {
                                        dropDownLogin ? (<div className={style.logindropdown}>
                                            <div onClick={() => { navigate("/"); setDropDownLogin(false) }}>{user.name}</div>
                                            <div onClick={() => { navigate("/cart"); setDropDownLogin(false) }}>My Cart</div>
                                            <div onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } });dispatch(userLogout()); setDropDownLogin(false) }}>Logout</div>
                                        </div>) : (<></>)
                                    }
                                </div>)
                            }

                            <Link to="/cart"><img src={cart} className={style.navbar_cart} />
                                <p className={style.countBigScreen}>{popup.length}</p>

                            </Link>
                        </div>
                    </div>
                    <div className={style.navbar_bottom}>
                        <div>
                            <p onClick={()=>dispatch(getSofas("Sofas"))}><Link to={isAdmin?"/admin/products":"/products"} className={style.link}>SOFAS</Link></p>
                            <p onClick={()=>dispatch(getSofas("Beds"))} ><Link to={isAdmin?"/admin/products":"/products"} className={style.link}>BEDS</Link></p>
                            <p onClick={()=>dispatch(getSofas("ChildrenFurniture"))}><Link to={isAdmin?"/admin/products":"/products"} className={style.link}>CHILDREN'S FURNITURE</Link></p>
                            <p onClick={()=>dispatch(getSofas("ArmChair"))} ><Link to={isAdmin?"/admin/products":"/products"} className={style.link}>ARMCHAIRS AND POUFS</Link></p>
                        </div>
                        <div>
                            <div><b style={{ fontSize: "0.9rem" }}>+91 8802244680</b></div>
                            <p style={{ fontSize: "0.9rem" }}>Fusion Furniture factory</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ----------Navbar for Laptop Screen Ends Here ------------ */}
            <div className={style.navbar_smallscreen}>
                <div className={style.logo_mobile}><Link to={"/"}><img src={FusionFurnishLogo} alt="Logo" /></Link></div>
                <div className={style.navbar_mobile}>
                    <div className={style.search_icon}>
                        <input type="text" placeholder='Search Items...' value={searchResults} onChange={(e) => setsearchResults(e.target.value)} />
                        <img src={search} alt="" />
                        {/* {
                            searchResults.length > 0 ? (<div className={style.searchDropdown}>
                                {
                                    searchedData.length ? (searchedData.map((e) => {
                                        return (
                                            <div key={e.id} onClick={() => { setsearchResults(""); navigate(`/product/productdetails/${e.t}/${e.id}`) }}>{e.title}</div>
                                        )
                                    })) : (<div>No Results...</div>)
                                }
                            </div>) : (<></>)
                        } */}
                    </div>
                    {
                        !isAuth ? (<p><Link to={"/login"} className={style.link}><b>Login</b></Link></p>) : (<div className={style.humanIcon}><img src={human} alt="" onClick={() => { setDropDownLogin(!dropDownLogin) }} />
                            {
                                dropDownLogin ? (<div className={style.logindropdown}>
                                    <div onClick={() => { navigate("/"); setDropDownLogin(false) }}>{userName}</div>
                                    <div onClick={() => { navigate("/cart"); setDropDownLogin(false) }}>My Cart</div>
                                    <div onClick={() => { dispatch(userLogout()); setDropDownLogin(false) }}>Logout</div>
                                </div>) : (<></>)
                            }
                        </div>)
                    }
                    <div>
                        <img src={cart} className={style.navbar_cart} onClick={() => { navigate("/cart") }} />
                        <p className={style.countBigScreen}>{popup.length}</p>
                    </div>
                    <img src={clickedHumburger ? cross : burger} className={style.navbar_humburger} onClick={() => { setClickedHumburger(!clickedHumburger) }} />
                </div>
            </div>
            {
                clickedHumburger ? (<div className={style.main_dropdown}>
                    <div className={style.mobile_dropdown}>
                        <div>
                            <p><Link to={"/products"} onClick={() => { setClickedHumburger(!clickedHumburger) }}>SOFAS</Link></p>
                            <p ><Link to={"/products"} onClick={() => { setClickedHumburger(!clickedHumburger) }}>BED</Link></p>
                            <p ><Link to={"/products"} onClick={() => { setClickedHumburger(!clickedHumburger) }}>CHILDREN'S FURNITURE</Link></p>
                            <p ><Link to={"/products"} onClick={() => { setClickedHumburger(!clickedHumburger) }}>ARMCHAIRS AND POUFS</Link></p>
                        </div>
                        <div>
                            <div>
                                <p>Individual project</p>
                                <p>Payment</p>
                                <p>Portfolio</p>
                                <p>Dubai</p>
                            </div>
                            <div>
                                <p>Delivery</p>
                                <p>Blog</p>
                                <p>About us</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div>
                            <h1>+91 8802244680</h1>
                            <p>Fusion Furniture Factory</p>
                        </div>
                    </div>
                </div>) : (<></>)
            }
        </div>
    )
}

export default Navbar