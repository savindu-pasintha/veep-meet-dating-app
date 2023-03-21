"homepage": ".",

<CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" color="red" />
</CHeaderBrand>

<CHeaderNav>
    <CNavItem>
    <CNavLink href="#">
        <CIcon icon={cilBell} size="lg" />
    </CNavLink>
    </CNavItem>
    <CNavItem>
    <CNavLink href="#">
        <CIcon icon={cilList} size="lg" />
    </CNavLink>
    </CNavItem>
    <CNavItem>
    <CNavLink href="#">
        <CIcon icon={cilEnvelopeOpen} size="lg" />
    </CNavLink>
    </CNavItem>
</CHeaderNav>

<CHeaderDivider />

<CContainer fluid>
<AppBreadcrumb />
</CContainer>
