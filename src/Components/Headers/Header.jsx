import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRightToBracket, faClose, faSearch, faSpoon, faUser } from '@fortawesome/free-solid-svg-icons'
import { navbar } from '../../assets/assets'
import { useNavbar } from '../../Context/NavbarContext'
import { useSign } from '../../Context/SignContext'
import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning'

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
                    <FontAwesomeIcon className='ic_close' onClick={() =>setAlert(false)} icon={faClose}/>
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
                    autoComplete="off"
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="ip"
                    autoComplete="off"
                />
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    maxLength="11"
                    pattern="[0-9]{10,11}"
                    title="Please enter 10 to 11 digits"
                    className="ip"
                    autoComplete="off"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="ip"
                    autoComplete="off"
                />
                <button type="submit" className="btn_submit">
                    Register
                </button>
            </form>
        </>
    );
};

export const Login = ({setSignUp,setIsLogin}) =>{
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (userInfo.email === e.target.email.value && userInfo.password === e.target.password.value) {
            setSignUp(true)
            navigate('/'); 
        } else {
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
                    <FontAwesomeIcon icon={faWarning} /> Please fill in all information!
                    <FontAwesomeIcon className='ic_close' onClick={() =>setAlert(false)} icon={faClose}/>
                    <div className="progress-bar"></div>
                </div>
            )}
            <form className='form f1' onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className='next_or_prev'>
                    <h1 className="title">Login</h1>
                    <FontAwesomeIcon onClick={handlePrev} className='ic_back-prev' icon={faArrowLeft}/>
                </div>
                <input type="email" id='email' placeholder='Email' className='ip' autoComplete='off' />
                <input type="password" id='password' placeholder='Password' className='ip' autoComplete='off' />
                <button type='submit' className='btn_submit'>Login</button>
            </form>
        </>
    )
}

const Header = () => {
    const {colorText,setColorText} = useNavbar()
    const { signUp, setSignUp } = useSign()
    const location = useLocation();
    const navigate = useNavigate()
    const [showOverlay, setShowOverlay] = useState(false);
    const [isLogin, setIsLogin] = useState(true); 


    useEffect(() => {
        const currentPath = location.pathname;
        const matchedMenu = navbar.find(item => item.href === currentPath);
        if (matchedMenu) {
            setColorText(matchedMenu.name); 
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
        navigate('/')
    }

  return (
    <>
        <div className={`header fixed ${isScrolled ? 'bg-white' : 'bg-tranparent'}`}>
            <div className='container_header'>
                <nav className='navbar'>
                    <Link className='logo' to={'/'}>Sa<FontAwesomeIcon className='ic_logo' icon={faSpoon}/>ads</Link>
                    <ul className='navb'>
                        {navbar.map((nav,idx) =>(
                            <li className={`nav ${colorText === nav.name ? 'text-main' : 'text-black'}`} key={idx}><Link to={nav.href} onClick={() => window.scrollTo(0, 0)}>{nav.name.charAt(0).toUpperCase() + nav.name.slice(1)}</Link></li>
                        ))}
                        <input className='search' placeholder="Enter keyword..." type="text" /><FontAwesomeIcon className='ic_search' icon={faSearch}/>
                        <button className='btn_lr'>{signUp ? <FontAwesomeIcon icon={faUser}/> : <p> <span onClick={handleSignUpClick} className='sp'>Login</span>/<span onClick={handleRegisterClick} className='sp'>Register</span></p> }</button>
                        {/* {signUp ? <CartIcon/> : ''} */}
                        {signUp ? <div className='ml-[10px] size-6'>
                            <FontAwesomeIcon
                                    onClick={getOut}
                                    icon={faArrowRightToBracket}
                                    className=''
                            />
                        </div> : ''}
                    </ul>
                </nav>
            </div>
            {showOverlay && (
                <div className={`overlay ${showOverlay ? 'active' : ''}`} onClick={closeOverlay}>
                    {isLogin ? <Login setSignUp={setSignUp} setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}
                </div>
            )}
        </div>
    </>
  )
}

export default Header