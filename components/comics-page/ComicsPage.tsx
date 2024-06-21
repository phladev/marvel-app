// @ts-nocheck
import axios from 'axios'
import { createURL } from "@/config/api";
import { View, Image, ScrollView } from "react-native";
import { useEffect, useState } from 'react';
import { Comic } from '@/types/comics';

const ComicsPage = () => {
  const [data, setData] = useState<Comic>([]);

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
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {data.map((comic: Comic) => (
            <Image key={comic.id} style={{height: 200, width: 150, resizeMode: 'contain',}} source={{uri: `${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`}}/>
          ))}
        </View>
      </ScrollView>
    </View>
   );
}
 
export default ComicsPage;