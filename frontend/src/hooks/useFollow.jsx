import toast from "react-hot-toast";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useFollow = () => {
  const queryClient = useQueryClient();
  const { mutate: follow, isPending } = useMutation({
    mutationFn: async (userId) => {
      try {
        const res = await fetch(`/api/users/follow/${userId}`, {
          method: "POST",
        });
          const data = await res.json();

        if (!res.ok) throw new Error(data.error || "something went wrong");

        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["authUser"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["suggestedUsers"],
        }),
      ]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return { follow, isPending };
};

export default useFollow;
