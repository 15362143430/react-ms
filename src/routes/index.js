import React from 'react';
import Login from '../pages/Login';
import Index from '../pages/admin/dashboard/Index';
import List from '../pages/admin/product/List';
import Edit from '../pages/admin/product/Edit';
import PageNotFound from '../pages/PageNotFound';
import { LineChartOutlined,ShoppingCartOutlined } from '@ant-design/icons';
export const mainRoutes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [{
        path: '/admin/dashboard',
        component: Index,
        isShow: true,
        title: '看板',
        icon: <LineChartOutlined />
    },
    {
        path: '/admin/products',
        component: List,
        isShow: true,
        exact: true,
        title: '商品列表',
        icon: <ShoppingCartOutlined />
    },
    {
        path: '/admin/edit/:id',
        component: Edit,
        isShow: false
    }
]