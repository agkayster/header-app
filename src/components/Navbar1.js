<nav className= "navbar navbar-expand-lg navbar-light">
			
				<Link to='/' className="navbar-brand">
					<img
						src={navlogo}
						alt='zuri-logo'
						width='20'
						height='20'
						className="d-inline-block align-top"
					/>
						Zuri Chat
				</Link>

				<div className="nav-item">
					<img
						src={searchlogo}
						alt='zuri-logo'
						width='20'
						height='20'
					/>
				</div>

				<button
					className="navbar-toggler"
					type='button'
					data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to='/features'
								className="nav-link"
								aria-current='page'>
								<span className="features">
									Features
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/pricing'
								className="nav-link"
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className="pricing">
									Pricing
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/community'
								className="nav-link">
								<span className="community">
									Community
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/downloads'
								className="nav-link"
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<span className="downloads">
									Downloads
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<img
								src={searchlogo}
								alt='search-logo'
								width='20'
								height='20'
							/>
						</li>
						<li className='nav-item'>
							<Link
								to='/signup'
								className="nav-link">
								<span className="signup">
									Sign Up
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/signin'
								className="btn btn-success"
								role='button'>
								<span className="signin">
									Sign In
								</span>
							</Link>
						</li>
					</ul>
				</div>
		</nav>
	);
};

export default withRouter(Navbar);

<Link to="/" className={`${headerStyles.navbarBrand}`}>
          <img
            src="/zurichatlogo.svg"
            alt="zuri-logo"
            width="20"
            height="20"
            className={`d-inline-block align-text-top ${headerStyles.image}`}
  />
  

  <div className={`nav-item ${headerStyles.searchLogo1}`}>
          <img
            src="/search-2-line.svg"
            alt="zuri-logo"
            width="20"
            height="20"
            className={`d-inline-block align-text-top ${headerStyles.searchLogo1}`}
          />
  </div>
  
  <li className={`nav-item ${headerStyles.searchLogo}`}>
              <img
                src="/search-2-line.svg"
                alt="search-logo"
                width="20"
                height="20"
                className={`d-inline-block align-text-top ${headerStyles.searchLogo}`}
              />
            </li>
