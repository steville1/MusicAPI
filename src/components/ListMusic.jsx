import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {rotateList} from '../library/rotateList';
import Card from '../components/shared/Cards'

const ListMusic = () => {
  const [initialData, setData] = useState(['A', 'B', 'C', 'D', 'E']);
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(rotateList(initialData, albums));
    },1000);
    return () => clearInterval(interval);
  });

  return (
    <Card>
    <ul className="list">
      {initialData.map((item, i) => <li className="listItem" key={item + i}>{item}</li>)}
    </ul>
    </Card>
  );
};

export default ListMusic;
