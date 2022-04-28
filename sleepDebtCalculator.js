const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return Math.floor(Math.random() * 9);
        break;
      case 'tuesday':
        return Math.floor(Math.random() * 9);
        break;
      case 'wednesday':
        return Math.floor(Math.random() * 9);
        break;
      case 'thursday':
        return Math.floor(Math.random() * 9);
        break;
      case 'friday':
        return Math.floor(Math.random() * 9);
        break;
      case 'saturday':
        return Math.floor(Math.random() * 9);
        break;
      case 'sunday':
        return Math.floor(Math.random() * 9);
        break;
      default:
        return Math.floor(Math.random() * 9);
        break;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const overUnderSleepHours = Math.abs(actualSleepHours - idealSleepHours);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('the user got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`the user got ${overUnderSleepHours} hours more sleep than needed`);
    } else {
      console.log(`the user got ${overUnderSleepHours} hours less sleep than needed and should get some rest`);
    }
  }
  
  calculateSleepDebt();