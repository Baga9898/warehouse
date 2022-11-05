import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWarehouse, 
    faUsersGear, 
    faChartSimple, 
    faBox, 
    faUserTag 
} from '@fortawesome/free-solid-svg-icons';

export const sidebarMenuItems = [
    {
        section: 'Main',
        items: [
            { title: 'warehouses', path: '/warehouses', icon: <FontAwesomeIcon icon={faWarehouse} /> },
        ]
    },
    {
        section: 'Statistic',
        items: [
            { title: 'statistic', path: '/statistic', icon: <FontAwesomeIcon icon={faChartSimple} /> },
            { title: 'leftovers', path: '/leftovers', icon: <FontAwesomeIcon icon={faBox} /> },
        ]
    },
    {
        section: 'Admin',
        items: [
            { title: 'users', path: '/users', icon: <FontAwesomeIcon icon={faUsersGear} /> },
            { title: 'roles', path: '/roles', icon: <FontAwesomeIcon icon={faUserTag} /> },
        ]
    },
]