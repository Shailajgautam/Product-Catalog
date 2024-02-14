import { Button } from '@/components/common/button';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/common/drawer';
import { FilterIcon } from '@/components/common/icons';
import { MobilePadding } from '@/components/common/mobile-padding';
import { ProductFilter } from './product-filter';

export function ProductFilterDrawer() {
  return (
    <Drawer
      closeOnPathnameChange
      trigger={
        <MobilePadding className="md:hidden">
          <DrawerTrigger asChild>
            <Button variant="transparent" icon={<FilterIcon />}>
              Filter
            </Button>
          </DrawerTrigger>
        </MobilePadding>
      }
    >
      <DrawerHeader>
        <h2>Product Filter</h2>
      </DrawerHeader>
      <DrawerBody>
        <ProductFilter />
      </DrawerBody>
    </Drawer>
  );
}
