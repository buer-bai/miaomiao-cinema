export default {
    path:'/movie',
    component: ()=> import('@/views/Movie'),
    children:[
        {
            path:'city',
            component: () => import('@/components/City')
        },
        {
            path:'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path:'search',
            component: () => import('@/components/Search')
        },
        {
            path:'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path:'detail/1/:movieId',
            components:{
                detai:()=>import('@/views/Movie/detail'),
                default:()=>import('@/components/NowPlaying')
            },
            props:{
                detai:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                detai:()=>import('@/views/Movie/detail'),
                default:()=>import('@/components/ComingSoon')
            },
            props:{
                detai:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}