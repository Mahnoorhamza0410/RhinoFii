import UpperFooterImage from '@/components/UpperFooterImage';
import DynamicLayout from '@/components/DynamicLayout';
import CountdownTimer from '@/components/CountdownTimer ';

const Pool = () => {
    return <div>
      <DynamicLayout title="Welcome to RhinoFi">
      <p className="text-lg">This is the homepage with a background and dynamic layout.</p>
    </DynamicLayout>
     < UpperFooterImage/>
     <CountdownTimer />
    </div>;
  };
  
  export default Pool;