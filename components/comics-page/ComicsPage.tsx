// @ts-nocheck
import axios from 'axios'
import { createURL } from "@/config/api";
import { Text, View, Image } from "react-native";
import { useEffect, useState } from 'react';
import { Comic } from '@/types/comics';
import ComicItem from '../comic-item/ComicItem';

const ComicsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = createURL('comics')
      try {
        const response = await axios.get(url)
        setData(response.data.data.results)
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, []);

  return ( 
    <View>
      {data.map(comic => (
        <View style={{display: 'flex',}}>
          <View style={{display: 'flex',}}>
            <Image style={{height: 100, width:100}} source={{uri: `${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`}}/>
            <Text>{comic.title}</Text>
          </View>
        </View>
      ))}
    </View>
   );
}
 
export default ComicsPage;