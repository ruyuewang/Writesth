import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button} from "./style";

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo href ='/'/>
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download</NavItem>
                <NavItem className='right'>Login</NavItem>
                <NavItem className='right'>
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className='iconfont'>&#xe67c;</i>
                    Write
                </Button>
                <Button className='reg'>Sign Up</Button>
            </Addition>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type:'search_blur'
            };
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);