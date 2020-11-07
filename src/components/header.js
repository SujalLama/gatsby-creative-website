import React,{useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 Container
} from 'reactstrap';
import {Link} from 'gatsby';
import '../styles/main.css';
import {motion} from 'framer-motion';


const headVariants = {
  hidden: {
    opacity: 0,
    y: -500
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        delay: 2,
        duration: 2,
        type: 'spring',
        stiffness: 50
    }
  }
}

const Header = () => {
     const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
 
    return (
         <div>
            <Container>
      <Navbar color="light" dark expand="md" className="fixed bg-transparent">
        <NavbarBrand href="/"
        ><motion.p
        variants={headVariants}
        initial="hidden"
        animate="visible"
        className="h3"
        >creative cloud</motion.p></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={ isOpen ? `bg bg-white rounded` : `m-auto`}  navbar>
            <UncontrolledDropdown nav inNavbar className="mx-5">
                
              <DropdownToggle nav caret>
                 <Link style={{fontSize: '1.3em', color: '#fff'}} to="/">
                          Home
                   </Link> 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            

          <UncontrolledDropdown nav inNavbar className="mx-5">
              <DropdownToggle nav caret>
                <Link style={{fontSize: '1.3em', color: '#fff'}} to="/blog">
                      Blog
                      
                      </Link>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
                

            </UncontrolledDropdown>

                      </Nav>
        
        </Collapse>
      </Navbar>
      </Container>
    </div>        
    )
}

export default Header
