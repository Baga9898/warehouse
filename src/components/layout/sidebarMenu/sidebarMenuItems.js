import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';

import { Paths }             from './../../../api/constants';

import { 
    faWarehouse, 
    faUsersGear, 
    faChartSimple, 
    faBox, 
    faUserTag 
}                            from '@fortawesome/free-solid-svg-icons';
import * as INTL             from '../../../utils/texts';

export const sidebarMenuItems = [
    {
        section: INTL.mainSection,
        items: [
            { title: INTL.warehousesItem, path: Paths.warehouses, icon: <FontAwesomeIcon icon={faWarehouse} /> },
        ]
    },
    {
        section: INTL.statisticSection,
        items: [
            { title: INTL.statisticItem, path: Paths.statistic, icon: <FontAwesomeIcon icon={faChartSimple} /> },
            { title: INTL.leftoversItem, path: Paths.leftovers, icon: <FontAwesomeIcon icon={faBox} /> },
        ]
    },
    {
        section: INTL.adminSection,
        items: [
            { title: INTL.usersItem, path: Paths.users, icon: <FontAwesomeIcon icon={faUsersGear} /> },
            { title: INTL.rolesItem, path: Paths.roles, icon: <FontAwesomeIcon icon={faUserTag} /> },
        ]
    },
]