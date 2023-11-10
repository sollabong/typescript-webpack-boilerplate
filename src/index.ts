import flagsmith from 'flagsmith';
import 'flowbite';

const freePlan = document.getElementById('free-plan') as HTMLElement;
const pricingTable = document.getElementById('pricing-table') as HTMLElement;

flagsmith.init({
  environmentID: 'dF5aF2UXeRtbCxWg47kbhY',

  onChange: () => {
    if (!flagsmith.hasFeature('feature_free_plan')) {
      pricingTable.removeChild(freePlan);
      pricingTable.classList.remove('lg:grid-cols-4');
      pricingTable.classList.add('lg:grid-cols-3');
      console.log('feature_free_plan');
    }
  },
});
