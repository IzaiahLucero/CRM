let taxRateSchedule1 = {
    description: 'Albuquerque',
    taxRate: 7.7500,
    locationCode: '02-100',
}

let taxRateSchedule2 = {
    description: 'Edgewood (Bernalillo)',
    taxRate: 7.7500,
    locationCode: '02-334',
}

let taxRateSchedule3 = {
    description: 'Rio Rancho (Bernalillo)',
    taxRate: 8.0000,
    locationCode: '02-647',
}

let taxRateSchedule4 = {
    description: 'Los Ranchos de Albuqueruqe',
    taxRate: 7.3125,
    locationCode: '02-200',
}

let taxRateSchedule5 = {
    description: 'Village of Tijeras',
    taxRate: 7.7500,
    locationCode: '02-318',
}

let taxRateSchedules = [taxRateSchedule1, taxRateSchedule2, taxRateSchedule3, taxRateSchedule4, taxRateSchedule5]

taxRateSchedules.forEach(taxRate => console.log(taxRate))