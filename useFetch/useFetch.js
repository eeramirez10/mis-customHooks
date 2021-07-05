import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

export const useFetch = (url) => {

    const isMounted = useRef(true)


    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])



    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {

                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                }



            });

    }, [url]);

    return state;

}


useFetch.propType = {
    url: PropTypes.string.isRequired
}