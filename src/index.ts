import flagsmith from 'flagsmith';
import 'flowbite';

flagsmith.init({
  environmentID: 'dF5aF2UXeRtbCxWg47kbhY',
  onChange: () => {
    const freePlan: Node | null = document.getElementById('free-plan');
    const pricingTable: HTMLElement | null =
      document.getElementById('pricing-table');
    if (!flagsmith.hasFeature('feature_free_plan')) {
      (pricingTable as HTMLElement).removeChild(freePlan as Node);
      (pricingTable as HTMLElement).classList.remove('lg:grid-cols-4');
      (pricingTable as HTMLElement).classList.add('lg:grid-cols-3');
      console.log('feature_free_plan');
    }
  },
});
