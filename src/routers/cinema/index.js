export default {
    path:'/cinema',
    component: ()=> import('@/views/Cinema'),
    children:[
        {
            path:'list1',
            component: () => import('@/components/List1')
        },
        {
            path:'list2',
            component: () => import('@/components/List2')
        },
        {
            path:'list3',
            component: () => import('@/components/List3')
        },
        {
            path:'/cinema',
            redirect:'/cinema/list1'
        }
    ]
}