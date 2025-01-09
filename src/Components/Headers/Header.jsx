import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRightToBracket, faBars, faCartShopping, faClose, faSearch, faSpoon, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { navbar } from '../../assets/assets'
import { useNavbar } from '../../Context/NavbarContext'
import { useSign } from '../../Context/SignContext'
import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning'
import { useCart } from '../../Context/CartContext'
import debounce from "lodash.debounce";

export const Register = ({setIsLogin}) => {
    const [alert, setAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
        };

        if (!userInfo.username || !userInfo.email || !userInfo.phone || !userInfo.password) {
            setAlert(true);
            setTimeout(() => setAlert(false), 4000); 
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLogin(true)
        }
    };

    const handleNext = () =>{
        setIsLogin(true)
    }

    return (
        <>
            {alert && (
                <div className="alert">
                    <FontAwesomeIcon icon={faWarning} /> Please fill in all information!
                    <FontAwesomeIcon className='ic_close' onClick={(e) => {e.stopPropagation(); setAlert(false);}}  icon={faClose}/>
                    <div className="progress-bar"></div>
                </div>
            )}
            <form className="form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className='next_or_prev'>
                    <h1 className="title">Register</h1>
                    <FontAwesomeIcon onClick={handleNext} className='ic_back-prev' icon={faArrowRightToBracket}/>
                </div>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="ip"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="ip"
                />
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    maxLength="11"
                    pattern="[0-9]{10,11}"
                    title="Please enter 10 to 11 digits"
                    className="ip"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="ip"
                />
                <button type="submit" className="btn_submit">
                    Register
                </button>
            </form>
        </>
    );
};

export const Login = ({setSignUp,setIsLogin,setShowOverlay}) =>{
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (userInfo.email === e.target.email.value && userInfo.password === e.target.password.value) {
            setSignUp(true)
            setShowOverlay(false)
            navigate('/'); 
        }
        else {
            setAlert(true);
            setTimeout(() => setAlert(false), 4000);
        }
    };

    const handlePrev = () =>{
        setIsLogin(false)
    }

    return(
        <>
            {alert && (
                <div className="alert">
                    <FontAwesomeIcon icon={faWarning} /> Wrong login information!
                    <FontAwesomeIcon className='ic_close' onClick={(e) => {e.stopPropagation(); setAlert(false);}}  icon={faClose}/>
                    <div className="progress-bar"></div>
                </div>
            )}
            <form className='form f1' onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className='next_or_prev'>
                    <h1 className="title">Login</h1>
                    <FontAwesomeIcon onClick={handlePrev} className='ic_back-prev' icon={faArrowLeft}/>
                </div>
                <input type="email" id='email' placeholder='Email' className='ip'  />
                <input type="password" id='password' placeholder='Password' className='ip'  />
                <button type='submit' className='btn_submit'>Login</button>
            </form>
        </>
    )
}

export const CartIcon = () => {
    const { cartCount } = useCart();
    
    return (
      <Link to={'/cart'} className="btn_space" >
        <FontAwesomeIcon
          icon={faCartShopping}
        />
        {cartCount > 0 && (
          <span className="btn_cart">{cartCount}</span>
        )}
      </Link>
    );
};

const Header = () => {
    const {colorText,setColorText} = useNavbar()
    const { signUp, setSignUp } = useSign()
    const location = useLocation();
    const navigate = useNavigate()
    const [showOverlay, setShowOverlay] = useState(false);
    const [isLogin, setIsLogin] = useState(true); 
    const [barOpen,setBarOpen] = useState(false)

    const handleOpenBar = () =>{
        setBarOpen((barOpen) => !barOpen)
    }


    useEffect(() => {
        const currentPath = location.pathname;
        const matchedMenu = navbar.find(item => item.href === currentPath);
        if (matchedMenu) {
            setColorText(matchedMenu.name); 
        }else{
            setColorText('')
        }
    }, [location]); 

    const handleSignUpClick = () => {
        if (signUp) {
            navigate('/profile');
        } else {
            setShowOverlay(true);
            setIsLogin(true); 
        }
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        const handleRouteChange = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);

        handleRouteChange();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);
        
    const handleRegisterClick = () => {
        setShowOverlay(true);
        setIsLogin(false); 
    };
    
    const closeOverlay = () => {
        setShowOverlay(false); 
    };
    
  
    const getOut = () =>{
        setSignUp(false)
        window.scrollTo(0, 0);
        navigate('/')
    }

    const whiteBackgroundPaths = ['/profile', '/cart'];

    const [searchQuery, setSearchQuery] = useState(''); 
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false); 

    const handleSearch = debounce((query) => {
        setSearchQuery(query);
    }, 300); 

    useEffect(() => {
        if (searchQuery.trim() === "") {
        setSearchResults([]);
        setIsSearching(false);
        return;
        }

        setIsSearching(true); 

        fetch(
        `https://salad-chi.vercel.app/api/menu?search=${searchQuery}`
        )
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok"); 
            }
            return response.json();
        })
        .then((data) => {
            const filteredResults = data.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredResults);
        })
        .catch((error) => {
            console.error("Error fetching search results:", error);
            setSearchResults([]); 
        })
        .finally(() => {
            setIsSearching(false);
        });
    }, [searchQuery]);

    const handleResultClick = (id) => {
        navigate(`/${id}`); 
        setSearchQuery("");
        setSearchResults([]);
    };

  return (
    <>
        <div className={`header fixed ${whiteBackgroundPaths.includes(location.pathname) || isScrolled ? 'bg-white' : 'bg-tranparent'}`}>
            <div className='container_header'>
                <nav className='navbar'>
                    <Link className='logo' to={'/'}>Sa<FontAwesomeIcon className='ic_logo' icon={faSpoon}/>ads</Link>
                    <FontAwesomeIcon
                        className="menu-icon-bar"
                        icon={barOpen ? faTimes : faBars}
                        onClick={handleOpenBar}
                    />
                    <ul className={`navb ${barOpen ? 'active1' : ''}`}>
                        {navbar.map((nav,idx) =>(
                            <li className={`nav ${colorText === nav.name ? 'text-main' : 'text-black'}`} key={idx}><Link to={nav.href} onClick={() => window.scrollTo(0, 0)}>{nav.name.charAt(0).toUpperCase() + nav.name.slice(1)}</Link></li>
                        ))}
                        <div className='searchh' ><input className='search' placeholder="Enter keyword..." type="text" onChange={(e) => handleSearch(e.target.value.trim())}/><FontAwesomeIcon className='ic_search' icon={faSearch} /></div>
                        {isSearching && (
                            <div className="search-action no-result">
                                <p>Searching...</p>
                            </div>
                        )}
                        {!isSearching && searchResults.length > 0 && (
                            <ul className="search-action">
                                {searchResults.map((item) => (
                                    <li className="result_search" key={item.id} onClick={() => handleResultClick(item.id)}>
                                        <img src={item.image} alt={item.name} />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {!isSearching &&
                            searchQuery &&
                            searchResults.length === 0 && (
                                <div className="search-action no-result">
                                    <p>No results found</p>
                                </div>
                            )}
                        {signUp ? <Link className='btn_space' to={'/profile'}><FontAwesomeIcon icon={faUser}/></Link> : <button className='btn_lr'><p><span onClick={handleSignUpClick} className='sp'>Login</span>/<span onClick={handleRegisterClick} className='sp'>Register</span></p></button> }
                        {signUp ? <CartIcon/> : ''
                        } 
                        {signUp ? 
                            <FontAwesomeIcon
                                    className='btn_space btn-get-out'
                                    onClick={getOut}
                                    icon={faArrowRightToBracket}
                            />
                            : ''}
                    </ul>
                </nav>
            </div>
            {showOverlay && (
                <div className={`overlay ${showOverlay ? 'active' : ''}`} onClick={closeOverlay}>
                    {isLogin ? <Login setSignUp={setSignUp} setIsLogin={setIsLogin} setShowOverlay={setShowOverlay}/> : <Register setIsLogin={setIsLogin} />}
                </div>
            )}
        </div>
    </>
  )
}

export default Header