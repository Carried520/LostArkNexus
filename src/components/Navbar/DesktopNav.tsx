import {
    Box,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
  } from '@chakra-ui/react';
import DesktopSubNav from './DesktopSubNav';

  export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    image?: string;
  };
export default function DesktopNav(){
    const linkColor = "#ffffff";
    const linkHoverColor = "#d3d3d3";
  
    
    
      const NAV_ITEMS: Array<NavItem> = [
        {
          label: '',
          href: '#',
        },
      ];

    return (
      <Stack direction={'row'} spacing={4} fontFamily={"ProximaBold"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'18px'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  width="150px"
                  border={0}
                  boxShadow={'xl'}
                  bg="#373742"
                  p={4}
                  fontSize={'14px'}
                  rounded={'xl'}
                  >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
}