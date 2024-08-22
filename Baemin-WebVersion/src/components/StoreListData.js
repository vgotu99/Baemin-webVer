const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { bname: '' };
const modifiedBname = (currentUser.bname || '').replace('동', '점');

export const stores = [
  {
    id: 1,
    star: `(4.6)`,
    tip: `0~2000원`,
    lowest: `10000원`,
    name: `귀한족발 ${modifiedBname}`,
    type: `bossam`,
    sells: [`bossam`, `night`, `meat`],
    products: [
      {
        id: 1,
        name: `오리지널 족발`,
        price: `30,000`,
        description: `귀한족발 만의 부드러운 오리지널 족발`,
      },
      {
        id: 2,
        name: `매운 족발`,
        price: `32,000`,
        description: `매콤한 양념이 특징인 족발`,
      },
      {
        id: 3,
        name: `반반 족발`,
        price: `31,000`,
        description: `오리지널과 매운 족발을 반반씩`,
      },
      {
        id: 4,
        name: `족발 세트`,
        price: `50,000`,
        description: `족발과 다양한 반찬으로 이루어진 세트`,
      },
      {
        id: 5,
        name: `족발 덮밥`,
        price: `12,000`,
        description: `족발과 함께 먹는 따뜻한 덮밥`,
      },
    ],
  },
  {
    id: 2,
    star: `(4.9)`,
    tip: `0~2500원`,
    lowest: `14000원`,
    name: `마왕족발 ${modifiedBname}`,
    type: `bossam`,
    sells: [`bossam`, `night`, `meat`],
    products: [
      {
        id: 1,
        name: `오리지널 족발`,
        price: `28,000`,
        description: `마왕족발 만의 부드러운 오리지널 족발`,
      },
      {
        id: 2,
        name: `매운 족발`,
        price: `30,000`,
        description: `매콤한 양념이 특징인 족발`,
      },
      {
        id: 3,
        name: `마늘 족발`,
        price: `32,000`,
        description: `마늘 소스가 특제인 족발`,
      },
      {
        id: 4,
        name: `족발 세트`,
        price: `48,000`,
        description: `족발과 다양한 반찬으로 이루어진 세트`,
      },
      {
        id: 5,
        name: `족발 전골`,
        price: `35,000`,
        description: `족발을 전골 형태로 즐기는 메뉴`,
      },
    ],
  },
  {
    id: 3,
    star: `(4.7)`,
    tip: `0~3200원`,
    lowest: `14000원`,
    name: `구구족 ${modifiedBname}`,
    type: `bossam`,
    sells: [`bossam`, `night`, `meat`],
    products: [
      {
        id: 1,
        name: `오리지널 족발`,
        price: `29,000`,
        description: `구구족만의 부드러운 오리지널 족발`,
      },
      {
        id: 2,
        name: `매운 족발`,
        price: `31,000`,
        description: `매콤한 양념이 특징인 족발`,
      },
      {
        id: 3,
        name: `간장 족발`,
        price: `32,000`,
        description: `간장 소스가 특제인 족발`,
      },
      {
        id: 4,
        name: `족발 보쌈 세트`,
        price: `55,000`,
        description: `족발과 보쌈을 함께 즐기는 세트`,
      },
      {
        id: 5,
        name: `족발 반찬 세트`,
        price: `40,000`,
        description: `족발과 함께 즐기는 다양한 반찬들`,
      },
    ],
  },
  {
    id: 4,
    star: `(4.7)`,
    tip: `0~3400원`,
    lowest: `10000원`,
    name: `두찜 ${modifiedBname}`,
    type: `jjigae`,
    sells: [`jjigae`, `per1`, `night`, `rice`],
    products: [
      {
        id: 1,
        name: `까만 찜닭`,
        price: `23,000`,
        description: `간장 소스를 이용하여 만든 근본 까만 찜닭`,
      },
      {
        id: 2,
        name: `빨간 찜닭`,
        price: `23,000`,
        description: `한국인의 고추장 소스를 이용하여 만든 기본에 충실한 빨간 찜닭`,
      },
      {
        id: 3,
        name: `로제 찜닭`,
        price: `26,000`,
        description: `고소하고 풍부한 크림과 매콤함으로 만들어진 로제 찜닭`,
      },
      {
        id: 4,
        name: `묵은지 찜닭`,
        price: `26,000`,
        description: `묵은지가 들어가 개운한 김치러버들을 위한 묵은지 찜닭`,
      },
      {
        id: 5,
        name: `스팸부대 찜닭`,
        price: `26,000`,
        description: `짭짤한 스팸이 들어간 최고의 밥도둑 스팸부대 찜닭`,
      },
    ],
  },
  {
    id: 5,
    star: `(4.7)`,
    tip: `0~1600원`,
    lowest: `13000원`,
    name: `사위식당 ${modifiedBname}`,
    type: `jjigae`,
    sells: [`per1`, `jjigae`, `rice`],
    products: [
      {
        id: 1,
        name: `돼지고기 김치찌개`,
        price: `9,000`,
        description: `풍부한 돼지고기와 김치가 어우러진 찌개`,
      },
      {
        id: 2,
        name: `순두부찌개`,
        price: `8,000`,
        description: `부드러운 순두부와 매콤한 국물의 찌개`,
      },
      {
        id: 3,
        name: `차돌박이 된장찌개`,
        price: `10,000`,
        description: `차돌박이와 고소한 된장의 맛`,
      },
      {
        id: 4,
        name: `해물 김치찌개`,
        price: `11,000`,
        description: `각종 해물이 들어간 김치찌개`,
      },
      {
        id: 5,
        name: `된장찌개`,
        price: `8,500`,
        description: `구수한 맛이 일품인 된장찌개`,
      },
    ],
  },
  {
    id: 6,
    star: `(4.9)`,
    tip: `0~2200원`,
    lowest: `9000원`,
    name: `열정국밥 ${modifiedBname}`,
    type: `jjigae`,
    sells: [`per1`, `jjigae`, `rice`],
    products: [
      {
        id: 1,
        name: `소고기국밥`,
        price: `8,000`,
        description: `진한 소고기 국물에 부드러운 소고기`,
      },
      {
        id: 2,
        name: `돼지국밥`,
        price: `7,500`,
        description: `고소한 돼지고기와 진한 국물이 어우러진 국밥`,
      },
      {
        id: 3,
        name: `순대국밥`,
        price: `7,500`,
        description: `풍부한 순대와 어우러진 국밥`,
      },
      {
        id: 4,
        name: `곰탕`,
        price: `8,500`,
        description: `진한 곰탕 국물과 부드러운 고기`,
      },
      {
        id: 5,
        name: `김치국밥`,
        price: `7,000`,
        description: `매콤한 김치와 고기의 조화`,
      },
    ],
  },
  {
    id: 7,
    star: `(4.6)`,
    tip: `0~3000원`,
    lowest: `14000원`,
    name: `육회한녀석들 ${modifiedBname}`,
    type: `sushi`,
    sells: [`per1`, `sushi`, `night`],
    products: [
      {
        id: 1,
        name: `육회 비빔밥`,
        price: `12,000`,
        description: `신선한 육회와 비빔밥의 조화`,
      },
      {
        id: 2,
        name: `육회 초밥`,
        price: `15,000`,
        description: `신선한 육회로 만든 초밥`,
      },
      {
        id: 3,
        name: `육회 덮밥`,
        price: `13,000`,
        description: `육회와 따뜻한 밥의 만남`,
      },
      {
        id: 4,
        name: `육회 샐러드`,
        price: `10,000`,
        description: `신선한 야채와 육회의 조화`,
      },
      {
        id: 5,
        name: `육회 떡볶이`,
        price: `14,000`,
        description: `육회와 매콤한 떡볶이의 조화`,
      },
    ],
  },
  {
    id: 8,
    star: `(4.6)`,
    tip: `0~3300원`,
    lowest: `10000원`,
    name: `연돈 ${modifiedBname}`,
    type: `sushi`,
    sells: [`sushi`, `per1`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `돈까스 정식`,
        price: `12,000`,
        description: `바삭하고 촉촉한 돈까스와 밥`,
      },
      {
        id: 2,
        name: `모듬초밥`,
        price: `18,000`,
        description: `여러 종류의 신선한 초밥`,
      },
      {
        id: 3,
        name: `돈까스 덮밥`,
        price: `13,000`,
        description: `돈까스를 덮밥 스타일로 즐기는 메뉴`,
      },
      {
        id: 4,
        name: `연돈 스페셜`,
        price: `20,000`,
        description: `돈까스와 초밥의 특별한 만남`,
      },
      {
        id: 5,
        name: `사시미 세트`,
        price: `25,000`,
        description: `신선한 사시미와 다양한 반찬`,
      },
    ],
  },
  {
    id: 9,
    star: `(4.8)`,
    tip: `0~1300원`,
    lowest: `10000원`,
    name: `어사출도 ${modifiedBname}`,
    type: `sushi`,
    sells: [`sushi`, `per1`, `night`],
    products: [
      {
        id: 1,
        name: `모듬 초밥`,
        price: `18,000`,
        description: `여러 종류의 신선한 초밥`,
      },
      {
        id: 2,
        name: `특선 사시미`,
        price: `25,000`,
        description: `신선한 사시미와 다양한 반찬`,
      },
      {
        id: 3,
        name: `연어 초밥`,
        price: `15,000`,
        description: `신선한 연어를 사용한 초밥`,
      },
      {
        id: 4,
        name: `참치 초밥`,
        price: `16,000`,
        description: `신선한 참치를 사용한 초밥`,
      },
      {
        id: 5,
        name: `초밥 정식`,
        price: `20,000`,
        description: `여러 종류의 초밥과 다양한 반찬`,
      },
    ],
  },
  {
    id: 10,
    star: `(4.6)`,
    tip: `0~3000원`,
    lowest: `12000원`,
    name: `미친피자 ${modifiedBname}`,
    type: `pizza`,
    sells: [`pizza`, `night`],
    products: [
      {
        id: 1,
        name: `페퍼로니 피자`,
        price: `15,000`,
        description: `매콤한 페퍼로니와 치즈의 조화`,
      },
      {
        id: 2,
        name: `고구마 피자`,
        price: `16,000`,
        description: `달콤한 고구마와 치즈의 조화`,
      },
      {
        id: 3,
        name: `콤비네이션 피자`,
        price: `18,000`,
        description: `여러 토핑이 어우러진 피자`,
      },
      {
        id: 4,
        name: `불고기 피자`,
        price: `17,000`,
        description: `달콤한 불고기와 치즈의 조화`,
      },
      {
        id: 5,
        name: `하와이안 피자`,
        price: `16,000`,
        description: `파인애플과 치즈의 조화`,
      },
    ],
  },
  {
    id: 11,
    star: `(4.6)`,
    tip: `0~2600원`,
    lowest: `9000원`,
    name: `반올림피자 ${modifiedBname}`,
    type: `pizza`,
    sells: [`pizza`, `night`],
    products: [
      {
        id: 1,
        name: `페퍼로니 피자`,
        price: `14,000`,
        description: `매콤한 페퍼로니와 치즈의 조화`,
      },
      {
        id: 2,
        name: `고구마 피자`,
        price: `15,000`,
        description: `달콤한 고구마와 치즈의 조화`,
      },
      {
        id: 3,
        name: `콤비네이션 피자`,
        price: `17,000`,
        description: `여러 토핑이 어우러진 피자`,
      },
      {
        id: 4,
        name: `불고기 피자`,
        price: `16,000`,
        description: `달콤한 불고기와 치즈의 조화`,
      },
      {
        id: 5,
        name: `하와이안 피자`,
        price: `15,000`,
        description: `파인애플과 치즈의 조화`,
      },
    ],
  },
  {
    id: 12,
    star: `(4.6)`,
    tip: `0~1700원`,
    lowest: `12000원`,
    name: `도미노피자 ${modifiedBname}`,
    type: `pizza`,
    sells: [`pizza`, `night`],
    products: [
      {
        id: 1,
        name: `페퍼로니 피자`,
        price: `15,000`,
        description: `매콤한 페퍼로니와 치즈의 조화`,
      },
      {
        id: 2,
        name: `고구마 피자`,
        price: `16,000`,
        description: `달콤한 고구마와 치즈의 조화`,
      },
      {
        id: 3,
        name: `콤비네이션 피자`,
        price: `18,000`,
        description: `여러 토핑이 어우러진 피자`,
      },
      {
        id: 4,
        name: `불고기 피자`,
        price: `17,000`,
        description: `달콤한 불고기와 치즈의 조화`,
      },
      {
        id: 5,
        name: `하와이안 피자`,
        price: `16,000`,
        description: `파인애플과 치즈의 조화`,
      },
    ],
  },
  {
    id: 13,
    star: `(4.6)`,
    tip: `0~1500원`,
    lowest: `12000원`,
    name: `파파존스 ${modifiedBname}`,
    type: `pizza`,
    sells: [`pizza`, `night`],
    products: [
      {
        id: 1,
        name: `페퍼로니 피자`,
        price: `15,000`,
        description: `매콤한 페퍼로니와 치즈의 조화`,
      },
      {
        id: 2,
        name: `고구마 피자`,
        price: `16,000`,
        description: `달콤한 고구마와 치즈의 조화`,
      },
      {
        id: 3,
        name: `콤비네이션 피자`,
        price: `18,000`,
        description: `여러 토핑이 어우러진 피자`,
      },
      {
        id: 4,
        name: `불고기 피자`,
        price: `17,000`,
        description: `달콤한 불고기와 치즈의 조화`,
      },
      {
        id: 5,
        name: `하와이안 피자`,
        price: `16,000`,
        description: `파인애플과 치즈의 조화`,
      },
    ],
  },
  {
    id: 14,
    star: `(4.7)`,
    tip: `0~1600원`,
    lowest: `9000원`,
    name: `제육의달인 ${modifiedBname}`,
    type: `meat`,
    sells: [`per1`, `meat`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `제육볶음`,
        price: `9,000`,
        description: `매콤한 양념의 제육볶음`,
      },
      {
        id: 2,
        name: `제육덮밥`,
        price: `8,500`,
        description: `제육볶음을 덮밥 스타일로`,
      },
      {
        id: 3,
        name: `제육정식`,
        price: `12,000`,
        description: `제육볶음과 다양한 반찬이 포함된 정식`,
      },
      {
        id: 4,
        name: `제육비빔밥`,
        price: `9,500`,
        description: `제육볶음을 비빔밥처럼 비벼먹는 메뉴`,
      },
      {
        id: 5,
        name: `제육 도시락`,
        price: `10,000`,
        description: `제육볶음이 포함된 도시락`,
      },
    ],
  },
  {
    id: 15,
    star: `(4.9)`,
    tip: `0~2800원`,
    lowest: `9000원`,
    name: `마장동김씨 ${modifiedBname}`,
    type: `meat`,
    sells: [`meat`, `per1`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `마장동 불고기`,
        price: `10,000`,
        description: `달콤한 양념의 불고기`,
      },
      {
        id: 2,
        name: `마장동 돼지갈비`,
        price: `12,000`,
        description: `양념이 잘 밴 돼지갈비`,
      },
      {
        id: 3,
        name: `마장동 소불고기`,
        price: `15,000`,
        description: `고소한 맛이 일품인 소불고기`,
      },
      {
        id: 4,
        name: `마장동 양념갈비`,
        price: `14,000`,
        description: `특제 양념의 양념갈비`,
      },
      {
        id: 5,
        name: `마장동 비빔밥`,
        price: `9,000`,
        description: `신선한 재료로 만든 비빔밥`,
      },
    ],
  },
  {
    id: 16,
    star: `(4.7)`,
    tip: `0~1900원`,
    lowest: `9000원`,
    name: `배달돼지 ${modifiedBname}`,
    type: `meat`,
    sells: [`per1`, `meat`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `돼지불고기`,
        price: `10,000`,
        description: `매콤달콤한 돼지불고기`,
      },
      {
        id: 2,
        name: `돼지김치찜`,
        price: `11,000`,
        description: `촉촉한 돼지고기와 김치의 조화`,
      },
      {
        id: 3,
        name: `돼지갈비찜`,
        price: `12,000`,
        description: `진한 양념이 밴 돼지갈비찜`,
      },
      {
        id: 4,
        name: `돼지고추장불고기`,
        price: `10,500`,
        description: `고추장 양념의 돼지불고기`,
      },
      {
        id: 5,
        name: `삼겹살 덮밥`,
        price: `9,500`,
        description: `불향 가득한 삼겹살 덮밥`,
      },
    ],
  },
  {
    id: 17,
    star: `(4.6)`,
    tip: `0~2900원`,
    lowest: `10000원`,
    name: `지랄닭발 ${modifiedBname}`,
    type: `night`,
    sells: [`night`, `per1`],
    products: [
      {
        id: 1,
        name: `매운 닭발`,
        price: `11,000`,
        description: `매운 맛이 일품인 닭발`,
      },
      {
        id: 2,
        name: `순살 닭발`,
        price: `12,000`,
        description: `뼈 없는 순살 닭발`,
      },
      {
        id: 3,
        name: `치즈 닭발`,
        price: `13,000`,
        description: `치즈와 함께 즐기는 닭발`,
      },
      {
        id: 4,
        name: `닭똥집`,
        price: `10,000`,
        description: `쫄깃한 닭똥집`,
      },
      {
        id: 5,
        name: `불닭발 볶음밥`,
        price: `9,500`,
        description: `매콤한 불닭발과 함께하는 볶음밥`,
      },
    ],
  },
  {
    id: 18,
    star: `(4.6)`,
    tip: `0~1900원`,
    lowest: `14000원`,
    name: `매콤쭈선생 ${modifiedBname}`,
    type: `night`,
    sells: [`night`, `per1`],
    products: [
      {
        id: 1,
        name: `쭈꾸미 볶음`,
        price: `14,000`,
        description: `매콤한 양념의 쭈꾸미 볶음`,
      },
      {
        id: 2,
        name: `쭈삼겹 볶음`,
        price: `15,000`,
        description: `삼겹살과 쭈꾸미의 환상 조합`,
      },
      {
        id: 3,
        name: `쭈꾸미 덮밥`,
        price: `13,500`,
        description: `쭈꾸미와 야채의 어우러진 덮밥`,
      },
      {
        id: 4,
        name: `쭈꾸미 치즈볶음`,
        price: `15,500`,
        description: `치즈와 함께하는 쭈꾸미 볶음`,
      },
      {
        id: 5,
        name: `쭈꾸미 라면`,
        price: `12,000`,
        description: `매콤한 쭈꾸미와 라면의 조화`,
      },
    ],
  },
  {
    id: 19,
    star: `(4.6)`,
    tip: `0~1100원`,
    lowest: `14000원`,
    name: `왔다닭발 ${modifiedBname}`,
    type: `night`,
    sells: [`night`, `per1`],
    products: [
      {
        id: 1,
        name: `매운 닭발`,
        price: `11,000`,
        description: `매운 맛이 일품인 닭발`,
      },
      {
        id: 2,
        name: `숯불 닭발`,
        price: `12,000`,
        description: `숯불에 구운 닭발`,
      },
      {
        id: 3,
        name: `오돌뼈 볶음`,
        price: `10,500`,
        description: `매콤한 오돌뼈 볶음`,
      },
      {
        id: 4,
        name: `양념 닭발`,
        price: `11,500`,
        description: `특제 양념의 닭발`,
      },
      {
        id: 5,
        name: `닭발 덮밥`,
        price: `10,000`,
        description: `매콤한 닭발과 함께하는 덮밥`,
      },
    ],
  },
  {
    id: 20,
    star: `(4.7)`,
    tip: `0~2100원`,
    lowest: `14000원`,
    name: `포크너 ${modifiedBname}`,
    type: `pasta`,
    sells: [`pasta`, `per1`],
    products: [
      {
        id: 1,
        name: `까르보나라`,
        price: `15,000`,
        description: `크림 소스의 진한 맛`,
      },
      {
        id: 2,
        name: `알리오 올리오`,
        price: `14,000`,
        description: `올리브 오일과 마늘의 풍미`,
      },
      {
        id: 3,
        name: `새우 로제 파스타`,
        price: `16,000`,
        description: `새우와 로제 소스의 조화`,
      },
      {
        id: 4,
        name: `볼로네제 파스타`,
        price: `15,500`,
        description: `토마토와 고기 소스의 파스타`,
      },
      {
        id: 5,
        name: `바질 페스토 파스타`,
        price: `14,500`,
        description: `바질의 향이 가득한 파스타`,
      },
    ],
  },
  {
    id: 21,
    star: `(4.6)`,
    tip: `0~1700원`,
    lowest: `9000원`,
    name: `아웃백 ${modifiedBname}`,
    type: `pasta`,
    sells: [`pasta`],
    products: [
      {
        id: 1,
        name: `스테이크 파스타`,
        price: `18,000`,
        description: `스테이크와 파스타의 만남`,
      },
      {
        id: 2,
        name: `쉬림프 파스타`,
        price: `16,000`,
        description: `새우가 가득한 파스타`,
      },
      {
        id: 3,
        name: `치킨 파스타`,
        price: `15,500`,
        description: `치킨과 크림 소스의 조화`,
      },
      {
        id: 4,
        name: `버섯 크림 파스타`,
        price: `15,000`,
        description: `버섯과 크림 소스의 풍미`,
      },
      {
        id: 5,
        name: `토마토 해산물 파스타`,
        price: `17,000`,
        description: `해산물과 토마토 소스의 파스타`,
      },
    ],
  },
  {
    id: 22,
    star: `(4.6)`,
    tip: `0~2400원`,
    lowest: `10000원`,
    name: `버텍스 ${modifiedBname}`,
    type: `pasta`,
    sells: [`pasta`, `per1`],
    products: [
      {
        id: 1,
        name: `트러플 파스타`,
        price: `18,000`,
        description: `트러플의 향이 가득한 파스타`,
      },
      {
        id: 2,
        name: `베이컨 크림 파스타`,
        price: `14,500`,
        description: `베이컨과 크림 소스의 조화`,
      },
      {
        id: 3,
        name: `뽀모도로 파스타`,
        price: `13,000`,
        description: `신선한 토마토 소스의 파스타`,
      },
      {
        id: 4,
        name: `페퍼로니 파스타`,
        price: `15,000`,
        description: `매콤한 페퍼로니와 파스타`,
      },
      {
        id: 5,
        name: `게살 크림 파스타`,
        price: `17,000`,
        description: `게살과 크림 소스의 조화`,
      },
    ],
  },
  {
    id: 23,
    star: `(5.0)`,
    tip: `0~1500원`,
    lowest: `14000원`,
    name: `BHC ${modifiedBname}`,
    type: `chicken`,
    sells: [`chicken`, `night`],
    products: [
      {
        id: 1,
        name: `뿌링클 치킨`,
        price: `18,000`,
        description: `특제 소스와 함께한 뿌링클 치킨`,
      },
      {
        id: 2,
        name: `맛초킹 치킨`,
        price: `17,500`,
        description: `매콤달콤한 맛초킹 치킨`,
      },
      {
        id: 3,
        name: `후라이드 치킨`,
        price: `15,000`,
        description: `바삭한 후라이드 치킨`,
      },
      {
        id: 4,
        name: `양념 치킨`,
        price: `16,000`,
        description: `달콤한 양념 소스의 치킨`,
      },
      {
        id: 5,
        name: `핫윙`,
        price: `14,000`,
        description: `매운맛이 일품인 핫윙`,
      },
    ],
  },
  {
    id: 24,
    star: `(4.9)`,
    tip: `0~1600원`,
    lowest: `12000원`,
    name: `교촌치킨 ${modifiedBname}`,
    type: `chicken`,
    sells: [`chicken`, `night`],
    products: [
      {
        id: 1,
        name: `교촌 오리지널`,
        price: `17,000`,
        description: `전통의 맛 교촌 오리지널`,
      },
      {
        id: 2,
        name: `교촌 허니콤보`,
        price: `18,500`,
        description: `달콤한 허니콤보 치킨`,
      },
      {
        id: 3,
        name: `교촌 레드콤보`,
        price: `18,000`,
        description: `매콤한 레드콤보 치킨`,
      },
      {
        id: 4,
        name: `교촌 반반 치킨`,
        price: `18,000`,
        description: `오리지널과 양념의 반반 치킨`,
      },
      {
        id: 5,
        name: `교촌 치즈볼`,
        price: `5,000`,
        description: `고소한 치즈볼`,
      },
    ],
  },
  {
    id: 25,
    star: `(4.9)`,
    tip: `0~3300원`,
    lowest: `10000원`,
    name: `후라이드중독 ${modifiedBname}`,
    type: `chicken`,
    sells: [`chicken`, `night`],
    products: [
      {
        id: 1,
        name: `중독 후라이드 치킨`,
        price: `16,000`,
        description: `바삭한 후라이드 치킨`,
      },
      {
        id: 2,
        name: `중독 양념 치킨`,
        price: `16,500`,
        description: `매콤달콤한 양념 치킨`,
      },
      {
        id: 3,
        name: `갈릭 후라이드 치킨`,
        price: `17,000`,
        description: `마늘 향이 가득한 후라이드 치킨`,
      },
      {
        id: 4,
        name: `핫 앤 스파이시 치킨`,
        price: `17,500`,
        description: `매운맛이 매력적인 치킨`,
      },
      {
        id: 5,
        name: `순살 후라이드`,
        price: `18,000`,
        description: `뼈 없는 순살 후라이드 치킨`,
      },
    ],
  },
  {
    id: 26,
    star: `(4.6)`,
    tip: `0~3000원`,
    lowest: `11000원`,
    name: `짬뽕지존 ${modifiedBname}`,
    type: `jjajang`,
    sells: [`per1`, `jjajang`],
    products: [
      {
        id: 1,
        name: `지존 짬뽕`,
        price: `12,000`,
        description: `해산물이 가득한 매콤한 짬뽕`,
      },
      {
        id: 2,
        name: `지존 짜장면`,
        price: `10,000`,
        description: `고소한 짜장 소스의 짜장면`,
      },
      {
        id: 3,
        name: `지존 탕수육`,
        price: `15,000`,
        description: `바삭한 탕수육`,
      },
      {
        id: 4,
        name: `지존 군만두`,
        price: `5,000`,
        description: `바삭한 군만두`,
      },
      {
        id: 5,
        name: `지존 볶음밥`,
        price: `9,000`,
        description: `고슬고슬한 볶음밥`,
      },
    ],
  },
  {
    id: 27,
    star: `(4.5)`,
    tip: `0~3500원`,
    lowest: `11000원`,
    name: `달려라짜장 ${modifiedBname}`,
    type: `jjajang`,
    sells: [`per1`, `jjajang`],
    products: [
      {
        id: 1,
        name: `달려라 짜장면`,
        price: `10,500`,
        description: `달콤한 짜장 소스의 짜장면`,
      },
      {
        id: 2,
        name: `달려라 짬뽕`,
        price: `12,500`,
        description: `얼큰한 맛의 짬뽕`,
      },
      {
        id: 3,
        name: `달려라 탕수육`,
        price: `16,000`,
        description: `바삭한 탕수육`,
      },
      {
        id: 4,
        name: `달려라 군만두`,
        price: `5,500`,
        description: `바삭하게 튀겨낸 군만두`,
      },
      {
        id: 5,
        name: `달려라 볶음밥`,
        price: `9,500`,
        description: `계란이 올려진 볶음밥`,
      },
    ],
  },
  {
    id: 28,
    star: `(4.9)`,
    tip: `0~2700원`,
    lowest: `13000원`,
    name: `홍콩반점 ${modifiedBname}`,
    type: `jjajang`,
    sells: [`per1`, `jjajang`],
    products: [
      {
        id: 1,
        name: `홍콩 짬뽕`,
        price: `11,000`,
        description: `해산물 가득 매콤한 짬뽕`,
      },
      {
        id: 2,
        name: `홍콩 짜장면`,
        price: `9,500`,
        description: `달콤한 짜장 소스의 짜장면`,
      },
      {
        id: 3,
        name: `홍콩 탕수육`,
        price: `14,000`,
        description: `쫄깃한 탕수육`,
      },
      {
        id: 4,
        name: `홍콩 군만두`,
        price: `6,000`,
        description: `바삭한 군만두`,
      },
      {
        id: 5,
        name: `홍콩 볶음밥`,
        price: `9,500`,
        description: `햄이 듬뿍 들어간 볶음밥`,
      },
    ],
  },
  {
    id: 29,
    star: `(4.9)`,
    tip: `0~1200원`,
    lowest: `13000원`,
    name: `까몬 ${modifiedBname}`,
    type: `asian`,
    sells: [`per1`, `asian`, `per1`],
    products: [
      {
        id: 1,
        name: `파인애플 볶음밥`,
        price: `12,000`,
        description: `달콤한 파인애플과 볶음밥`,
      },
      {
        id: 2,
        name: `팟타이`,
        price: `11,000`,
        description: `태국식 볶음 쌀국수`,
      },
      {
        id: 3,
        name: `그린 커리`,
        price: `13,000`,
        description: `매콤한 그린 커리`,
      },
      {
        id: 4,
        name: `카오팟`,
        price: `11,500`,
        description: `태국식 볶음밥`,
      },
      {
        id: 5,
        name: `똠얌꿍`,
        price: `13,500`,
        description: `새콤한 맛의 태국식 스프`,
      },
    ],
  },
  {
    id: 30,
    star: `(5.0)`,
    tip: `0~3400원`,
    lowest: `9000원`,
    name: `포메인 ${modifiedBname}`,
    type: `asian`,
    sells: [`per1`, `asian`, `rice`],
    products: [
      {
        id: 1,
        name: `베트남 쌀국수`,
        price: `12,000`,
        description: `신선한 재료로 끓인 베트남 쌀국수`,
      },
      {
        id: 2,
        name: `분짜`,
        price: `13,000`,
        description: `고기와 채소가 어우러진 베트남 요리`,
      },
      {
        id: 3,
        name: `짜조`,
        price: `9,000`,
        description: `바삭한 베트남식 만두`,
      },
      {
        id: 4,
        name: `카오만가이`,
        price: `11,500`,
        description: `태국식 닭고기 덮밥`,
      },
      {
        id: 5,
        name: `월남쌈`,
        price: `15,000`,
        description: `신선한 채소와 고기를 곁들인 월남쌈`,
      },
    ],
  },
  {
    id: 31,
    star: `(4.7)`,
    tip: `0~2100원`,
    lowest: `14000원`,
    name: `땀땀 ${modifiedBname}`,
    type: `asian`,
    sells: [`per1`, `asian`, `rice`],
    products: [
      {
        id: 1,
        name: `태국식 카레`,
        price: `12,500`,
        description: `매콤한 맛의 태국식 카레`,
      },
      {
        id: 2,
        name: `새우 팟타이`,
        price: `13,000`,
        description: `새우가 듬뿍 들어간 팟타이`,
      },
      {
        id: 3,
        name: `소고기 쌀국수`,
        price: `13,500`,
        description: `진한 국물의 소고기 쌀국수`,
      },
      {
        id: 4,
        name: `해산물 볶음밥`,
        price: `14,000`,
        description: `신선한 해산물이 들어간 볶음밥`,
      },
      {
        id: 5,
        name: `망고 샐러드`,
        price: `10,000`,
        description: `상큼한 맛의 망고 샐러드`,
      },
    ],
  },
  {
    id: 32,
    star: `(4.6)`,
    tip: `0~1700원`,
    lowest: `9000원`,
    name: `본죽 ${modifiedBname}`,
    type: `rice`,
    sells: [`rice`, `lunchbox`, `per1`],
    products: [
      {
        id: 1,
        name: `전복죽`,
        price: `14,000`,
        description: `신선한 전복이 들어간 죽`,
      },
      {
        id: 2,
        name: `소고기 야채죽`,
        price: `12,000`,
        description: `영양가득한 소고기 야채죽`,
      },
      {
        id: 3,
        name: `단호박죽`,
        price: `10,500`,
        description: `달콤한 단호박이 들어간 죽`,
      },
      {
        id: 4,
        name: `김치죽`,
        price: `11,500`,
        description: `매콤한 김치가 들어간 죽`,
      },
      {
        id: 5,
        name: `새우죽`,
        price: `13,000`,
        description: `탱탱한 새우가 들어간 죽`,
      },
    ],
  },
  {
    id: 33,
    star: `(4.6)`,
    tip: `0~2400원`,
    lowest: `10000원`,
    name: `고기듬뿍통큰비빔밥 ${modifiedBname}`,
    type: `rice`,
    sells: [`per1`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `소고기 비빔밥`,
        price: `11,000`,
        description: `소고기가 듬뿍 들어간 비빔밥`,
      },
      {
        id: 2,
        name: `닭고기 비빔밥`,
        price: `10,500`,
        description: `신선한 닭고기가 들어간 비빔밥`,
      },
      {
        id: 3,
        name: `돼지고기 비빔밥`,
        price: `10,500`,
        description: `쫄깃한 돼지고기가 들어간 비빔밥`,
      },
      {
        id: 4,
        name: `채소 비빔밥`,
        price: `9,500`,
        description: `각종 신선한 채소가 어우러진 비빔밥`,
      },
      {
        id: 5,
        name: `김치 비빔밥`,
        price: `10,000`,
        description: `매콤한 김치와 고기가 어우러진 비빔밥`,
      },
    ],
  },
  {
    id: 34,
    star: `(5.0)`,
    tip: `0~1500원`,
    lowest: `14000원`,
    name: `국수나무 ${modifiedBname}`,
    type: `rice`,
    sells: [`rice`, `per1`],
    products: [
      {
        id: 1,
        name: `잔치국수`,
        price: `9,500`,
        description: `국물 맛이 깊은 잔치국수`,
      },
      {
        id: 2,
        name: `비빔국수`,
        price: `10,500`,
        description: `매콤달콤한 비빔국수`,
      },
      {
        id: 3,
        name: `멸치국수`,
        price: `9,000`,
        description: `멸치 육수가 깊은 멸치국수`,
      },
      {
        id: 4,
        name: `소고기 국밥`,
        price: `11,000`,
        description: `진한 소고기 육수의 국밥`,
      },
      {
        id: 5,
        name: `칼국수`,
        price: `10,500`,
        description: `쫄깃한 면발이 일품인 칼국수`,
      },
    ],
  },
  {
    id: 35,
    star: `(4.9)`,
    tip: `0~1600원`,
    lowest: `12000원`,
    name: `본도시락 ${modifiedBname}`,
    type: `lunchbox`,
    sells: [`lunchbox`, `rice`, `per1`],
    products: [
      {
        id: 1,
        name: `소고기 불고기 도시락`,
        price: `13,500`,
        description: `담백한 소고기 불고기가 들어간 도시락`,
      },
      {
        id: 2,
        name: `닭가슴살 도시락`,
        price: `12,500`,
        description: `건강한 닭가슴살이 가득한 도시락`,
      },
      {
        id: 3,
        name: `연어 도시락`,
        price: `14,000`,
        description: `신선한 연어가 들어간 도시락`,
      },
      {
        id: 4,
        name: `김치 볶음밥 도시락`,
        price: `11,500`,
        description: `매콤한 김치 볶음밥과 함께 제공되는 도시락`,
      },
      {
        id: 5,
        name: `햄버그 스테이크 도시락`,
        price: `13,000`,
        description: `고소한 햄버그 스테이크와 야채가 포함된 도시락`,
      },
    ],
  },
  {
    id: 36,
    star: `(4.9)`,
    tip: `0~3300원`,
    lowest: `10000원`,
    name: `한솥도시락 ${modifiedBname}`,
    type: `lunchbox`,
    sells: [`lunchbox`, `per1`, `rice`],
    products: [
      {
        id: 1,
        name: `돈까스 도시락`,
        price: `10,500`,
        description: `바삭한 돈까스가 들어간 도시락`,
      },
      {
        id: 2,
        name: `닭강정 도시락`,
        price: `11,000`,
        description: `달콤한 닭강정이 포함된 도시락`,
      },
      {
        id: 3,
        name: `제육볶음 도시락`,
        price: `10,000`,
        description: `매콤한 제육볶음이 들어간 도시락`,
      },
      {
        id: 4,
        name: `새우 튀김 도시락`,
        price: `11,500`,
        description: `바삭한 새우튀김과 함께 제공되는 도시락`,
      },
      {
        id: 5,
        name: `소고기 불고기 도시락`,
        price: `12,000`,
        description: `달콤한 소고기 불고기가 포함된 도시락`,
      },
    ],
  },
  {
    id: 37,
    star: `(4.6)`,
    tip: `0~3000원`,
    lowest: `11000원`,
    name: `핵밥 ${modifiedBname}`,
    type: `lunchbox`,
    sells: [`per1`, `rice`, `lunchbox`],
    products: [
      {
        id: 1,
        name: `불고기 덮밥`,
        price: `11,500`,
        description: `달콤한 불고기가 듬뿍 들어간 덮밥`,
      },
      {
        id: 2,
        name: `김치 덮밥`,
        price: `10,500`,
        description: `매콤한 김치가 듬뿍 들어간 덮밥`,
      },
      {
        id: 3,
        name: `소고기 덮밥`,
        price: `12,000`,
        description: `신선한 소고기가 듬뿍 들어간 덮밥`,
      },
      {
        id: 4,
        name: `해산물 덮밥`,
        price: `13,000`,
        description: `신선한 해산물이 어우러진 덮밥`,
      },
      {
        id: 5,
        name: `야채 덮밥`,
        price: `10,000`,
        description: `신선한 야채가 듬뿍 들어간 덮밥`,
      },
    ],
  },
  {
    id: 38,
    star: `(4.5)`,
    tip: `0~3500원`,
    lowest: `11000원`,
    name: `우리할매떡볶이 ${modifiedBname}`,
    type: `tteokbokki`,
    sells: [`per1`, `tteokbokki`],
    products: [
      {
        id: 1,
        name: `할매떡볶이`,
        price: `9,000`,
        description: `정통의 맛을 자랑하는 할매떡볶이`,
      },
      {
        id: 2,
        name: `순대떡볶이`,
        price: `10,500`,
        description: `매콤한 떡볶이에 순대가 들어간 메뉴`,
      },
      {
        id: 3,
        name: `치즈떡볶이`,
        price: `11,000`,
        description: `고소한 치즈가 듬뿍 얹어진 떡볶이`,
      },
      {
        id: 4,
        name: `오뎅 떡볶이`,
        price: `10,000`,
        description: `쫄깃한 오뎅이 포함된 떡볶이`,
      },
      {
        id: 5,
        name: `해물 떡볶이`,
        price: `12,000`,
        description: `신선한 해산물이 들어간 떡볶이`,
      },
    ],
  },
  {
    id: 39,
    star: `(4.9)`,
    tip: `0~2700원`,
    lowest: `13000원`,
    name: `신전떡볶이 ${modifiedBname}`,
    type: `tteokbokki`,
    sells: [`per1`, `tteokbokki`],
    products: [
      {
        id: 1,
        name: `신전떡볶이`,
        price: `8,500`,
        description: `매콤하고 쫄깃한 신전떡볶이`,
      },
      {
        id: 2,
        name: `매운맛 떡볶이`,
        price: `9,000`,
        description: `매운맛을 더한 떡볶이`,
      },
      {
        id: 3,
        name: `야채 떡볶이`,
        price: `8,500`,
        description: `신선한 야채가 들어간 떡볶이`,
      },
      {
        id: 4,
        name: `모듬 떡볶이`,
        price: `10,000`,
        description: `다양한 재료가 어우러진 모듬 떡볶이`,
      },
      {
        id: 5,
        name: `새우 떡볶이`,
        price: `11,000`,
        description: `탱탱한 새우가 들어간 떡볶이`,
      },
    ],
  },
  {
    id: 40,
    star: `(4.9)`,
    tip: `0~1200원`,
    lowest: `13000원`,
    name: `떡순튀 ${modifiedBname}`,
    type: `tteokbokki`,
    sells: [`per1`, `tteokbokki`],
    products: [
      {
        id: 1,
        name: `튀김떡볶이`,
        price: `9,500`,
        description: `바삭한 튀김이 올라간 떡볶이`,
      },
      {
        id: 2,
        name: `순대튀김 떡볶이`,
        price: `10,000`,
        description: `순대와 튀김이 어우러진 떡볶이`,
      },
      {
        id: 3,
        name: `치즈튀김 떡볶이`,
        price: `11,500`,
        description: `치즈와 튀김이 어우러진 떡볶이`,
      },
      {
        id: 4,
        name: `매운튀김 떡볶이`,
        price: `10,500`,
        description: `매운맛 튀김이 올라간 떡볶이`,
      },
      {
        id: 5,
        name: `새우튀김 떡볶이`,
        price: `12,000`,
        description: `새우튀김과 함께 제공되는 떡볶이`,
      },
    ],
  },
  {
    id: 41,
    star: `(5.0)`,
    tip: `0~3400원`,
    lowest: `9000원`,
    name: `스타벅스 ${modifiedBname}`,
    type: `cafe`,
    sells: [`cafe`],
    products: [
      {
        id: 1,
        name: `아메리카노`,
        price: `4,500`,
        description: `진한 에스프레소와 물로 만든 기본 커피`,
      },
      {
        id: 2,
        name: `카페라떼`,
        price: `5,000`,
        description: `부드러운 우유와 에스프레소의 조화`,
      },
      {
        id: 3,
        name: `카라멜 마끼아또`,
        price: `5,500`,
        description: `달콤한 카라멜과 에스프레소가 어우러진 음료`,
      },
      {
        id: 4,
        name: `그린티 라떼`,
        price: `5,500`,
        description: `녹차와 우유가 조화를 이룬 음료`,
      },
      {
        id: 5,
        name: `초콜릿 모카`,
        price: `5,500`,
        description: `초콜릿과 커피의 달콤한 만남`,
      },
    ],
  },
  {
    id: 42,
    star: `(4.6)`,
    tip: `0~2000원`,
    lowest: `10000원`,
    name: `요거트월드 ${modifiedBname}`,
    type: `cafe`,
    sells: [`cafe`],
    products: [
      {
        id: 1,
        name: `플레인 요거트`,
        price: `4,500`,
        description: `상큼한 맛의 기본 플레인 요거트`,
      },
      {
        id: 2,
        name: `베리 요거트`,
        price: `5,000`,
        description: `다양한 베리가 들어간 요거트`,
      },
      {
        id: 3,
        name: `허니 요거트`,
        price: `5,000`,
        description: `달콤한 꿀이 어우러진 요거트`,
      },
      {
        id: 4,
        name: `그릭 요거트`,
        price: `5,500`,
        description: `건강한 그릭 스타일의 요거트`,
      },
      {
        id: 5,
        name: `망고 요거트`,
        price: `5,500`,
        description: `신선한 망고가 들어간 요거트`,
      },
    ],
  },
  {
    id: 43,
    star: `(4.2)`,
    tip: `0~3200원`,
    lowest: `11000원`,
    name: `파리바게트 ${modifiedBname}`,
    type: `cafe`,
    sells: [`cafe`],
    products: [
      {
        id: 1,
        name: `크로와상`,
        price: `3,000`,
        description: `버터 향이 가득한 크로와상`,
      },
      {
        id: 2,
        name: `햄치즈 바게트`,
        price: `4,500`,
        description: `햄과 치즈가 들어간 바게트`,
      },
      {
        id: 3,
        name: `딸기 케이크`,
        price: `5,500`,
        description: `신선한 딸기가 올라간 케이크`,
      },
      {
        id: 4,
        name: `마카롱 세트`,
        price: `6,000`,
        description: `다양한 맛의 마카롱이 포함된 세트`,
      },
      {
        id: 5,
        name: `커피 번`,
        price: `4,000`,
        description: `커피 맛이 나는 번`,
      },
    ],
  },
  {
    id: 44,
    star: `(4.2)`,
    tip: `0~2600원`,
    lowest: `12000원`,
    name: `맥도날드 ${modifiedBname}`,
    type: `fastfood`,
    sells: [`per1`, `fastfood`],
    products: [
      {
        id: 1,
        name: `빅맥`,
        price: `5,500`,
        description: `대표적인 햄버거 메뉴`,
      },
      {
        id: 2,
        name: `맥너겟`,
        price: `4,000`,
        description: `바삭한 치킨 너겟`,
      },
      {
        id: 3,
        name: `상하이 스파이시 버거`,
        price: `6,000`,
        description: `매콤한 맛이 일품인 버거`,
      },
      {
        id: 4,
        name: `필레오피쉬`,
        price: `5,000`,
        description: `신선한 생선이 들어간 버거`,
      },
      {
        id: 5,
        name: `불고기 버거`,
        price: `4,500`,
        description: `한국식 불고기가 들어간 버거`,
      },
    ],
  },
  {
    id: 45,
    star: `(4.4)`,
    tip: `0~1500원`,
    lowest: `8000원`,
    name: `버거킹 ${modifiedBname}`,
    type: `fastfood`,
    sells: [`per1`, `fastfood`],
    products: [
      {
        id: 1,
        name: `와퍼`,
        price: `6,500`,
        description: `버거킹의 대표적인 햄버거 메뉴`,
      },
      {
        id: 2,
        name: `치즈 와퍼`,
        price: `7,000`,
        description: `치즈가 더해진 와퍼`,
      },
      {
        id: 3,
        name: `몬스터X`,
        price: `8,500`,
        description: `다양한 재료가 들어간 푸짐한 버거`,
      },
      {
        id: 4,
        name: `통새우버거`,
        price: `7,500`,
        description: `통새우가 들어간 버거`,
      },
      {
        id: 5,
        name: `너겟킹`,
        price: `4,500`,
        description: `바삭한 치킨 너겟`,
      },
    ],
  },
  {
    id: 46,
    star: `(4.6)`,
    tip: `0~1200원`,
    lowest: `12000원`,
    name: `맘스터치 ${modifiedBname}`,
    type: `fastfood`,
    sells: [`per1`, `chicken`, `fastfood`],
    products: [
      {
        id: 1,
        name: `싸이순살`,
        price: `7,000`,
        description: `부드러운 순살치킨`,
      },
      {
        id: 2,
        name: `휠렛버거`,
        price: `5,500`,
        description: `두툼한 휠렛이 들어간 버거`,
      },
      {
        id: 3,
        name: `맘스 스파이시 버거`,
        price: `6,000`,
        description: `매콤한 맛이 특징인 버거`,
      },
      {
        id: 4,
        name: `치즈 인 더 에그 버거`,
        price: `6,500`,
        description: `치즈와 계란이 들어간 버거`,
      },
      {
        id: 5,
        name: `매콤 치킨 윙`,
        price: `7,500`,
        description: `매콤한 맛이 일품인 치킨 윙`,
      },
    ],
  },
];
