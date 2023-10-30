import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


function addCustomer(data) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => customersServices.addCustomer(data, apiHeaders()),
        onSuccess: () => queryClient.invalidateQueries(['transactions'])
    })
}

function editCustomer(data) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => customersServices.editCustomer(data, apiHeaders()),
        onSuccess: () => queryClient.invalidateQueries(['transactions'])
    })
}

function sendCustomer(id) {
    return useQuery({
        queryKey: ['transactions', id],
        queryFn: () => customersServices.sendCustomer(id, apiHeaders()),
    })
}


export const reactQueryHooks = {
    addCustomer,
    editCustomer,
    sendCustomer,
}