import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Adminhome = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: stats = {}} = useQuery({
        queryKey : ['admin-stats'],
        queryFn : async()=>{
            const res = await axiosSecure('/admin-stats')
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl font-semibold">Welcomr back, {user.displayName}</h2>
        </div>
    );
};

export default Adminhome;