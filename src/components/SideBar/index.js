import react from 'react'
import { SideBarContainer, SideBarLink, SideBarWrapper, SideBarMenu, CloseIcon, Icon } from './SideBarElements'

type Props = {
    isOpen: Boolean,
    toggle: () => void
}

const SideBar = (props: Props) => {
    const {isOpen, toggle} = props
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={toggle} to="/about">About</SideBarLink>
                    <SideBarLink onClick={toggle} to="/cultivation">Cultivation</SideBarLink>
                    <SideBarLink onClick={toggle} to="/nutrition">Nutrition</SideBarLink>
                    <SideBarLink onClick={toggle} to="/tree-availability">Tree Availability</SideBarLink>
                    <SideBarLink onClick={toggle} to="/products">Products</SideBarLink>
                    <SideBarLink onClick={toggle} to="/further-information">Further Information</SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar