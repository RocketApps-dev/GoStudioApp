const StatusProps = ['PENDING', 'CONFIRMED', 'CANCELLED', 'CONCLUDED'] as const;

type TypeStatus = typeof StatusProps[number];

export function returnColorWithStatusAppointments(status: string): string {
  switch (status as TypeStatus) {
    case 'CONFIRMED':
      return 'green';
    case 'CANCELLED':
      return 'red';
    case 'PENDING':
      return 'orange';
    default:
      return 'green';
  }
}
