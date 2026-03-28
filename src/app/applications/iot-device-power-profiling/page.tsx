import type { Metadata } from 'next';
import IoTDevice from '@/components/pages/IoTDevice';
export const metadata: Metadata = {
  title: 'IoT Device Power Profiling | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <IoTDevice />;
}
