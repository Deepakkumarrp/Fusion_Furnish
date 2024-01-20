import React from "react";

const data = {
  Sofas: [
    {
      id: 1,
      title: "DAVE SOFA",
      type: "Sofas",
      t: "Sofas",

      image:
        "https://api.woodfans.ru/storage/uploads/images/x9V57EeEsrvL9zWFSIUSK1766CK76PQ93XjrLDw1_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/CP65GN3NT3mxIemo9wXMFbJ19sPBXfhe0F9Ivr81_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/ESkUCJSMHzb62y1NeOkuTIEezKsjx0QzHOBb5Bd1_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/M83cTDULNmEr8rJ2qaOouPQjhpirGNXWStoLOKTG_widened_900.jpg",
      price: 252000,
    },
    {
      id: 2,
      title: "SOFA CITY",
      type: "Sofas",
      t: "Sofas",
      image:
        "https://api.woodfans.ru/storage/uploads/images/2di18TNSAcHrzcfG68FtSqYgzYom9feqpLGnOcmx_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/gVS0pCrTnMZMA0CYRzSv4UiECh5I0TVE9W0fA2uR_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/XdIDrOyutXZN8Wq23PEYwvM0JPnzSSEIh24HZYnV_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/4xO6HtnuPbQZ8mRmiTaAZmx312B9RK3J1876Nf7S_widened_900.jpg",
      price: 265000,
    },
    {
      id: 3,
      title: "SOFA LOOP",
      type: "Sofas",
      t: "Sofas",
      image:
        "https://api.woodfans.ru/storage/uploads/images/fWdxHlcAF73HnM5AF0BmAqnCbynELvAKBEJtdGI0_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/CGtr1K3ZyPLsbFD0Vl5IKa6CO4exIoSuBWSYIoeS_cropped_1200_1200_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/HvDTF9tHDS4r9UO1eD5XuQRCLxD1hgnadOKqBBfZ_cropped_1200_1200_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/fWdxHlcAF73HnM5AF0BmAqnCbynELvAKBEJtdGI0_widened_900.jpg",
      price: 212000,
    },
    {
      id: 4,
      title: "SOFA JO",
      type: "Sofas",
      t: "Sofas",
      image:
        "https://api.woodfans.ru/storage/uploads/images/cPdDkwV3Zi6PRhyWvP2JiHig2yArv3CdGO2AmNRw_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/LpUnnWk8oUyBEvX2O8d2d17kO74fXR8h0TqSJ8vu_cropped_897_897_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/OVR4S63rd6dlzpvDcA2NpX3NLTwvOSBwAMQZbSiy_cropped_900_900_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/cPdDkwV3Zi6PRhyWvP2JiHig2yArv3CdGO2AmNRw_widened_900.jpg",
      price: 352000,
    },
    {
      id: 5,
      title: "SOFA TIM",
      type: "Sofas",
      t: "Sofas",
      image:
        "https://api.woodfans.ru/storage/uploads/images/7vKOxusUHZfaFcvLrBbSuIMmYTRoVipUdZW4PvgQ_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/F5tcA1vkv6ylWgJL6vCpYcy3cmEnJsMXG4U5dLYk_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/xXslhRFzJSuFKuX8z4qmUSleRz2hKRa3W1M1uNC3_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/7vKOxusUHZfaFcvLrBbSuIMmYTRoVipUdZW4PvgQ_widened_900.jpg",
      price: 14000,
    },
    {
      id: 6,
      title: "BENCH TOTTI",
      type: "Sofas",
      t: "Sofas",
      image:
        "https://api.woodfans.ru/storage/uploads/images/2H44hPIgIAFBZ7gGrsJn4sksWDvXMa1xrD1EWZ23_cropped_1975_1975_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/650DrgjXtUX22WGSVLjztefrhGS4Yect2K42kYwN_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/UjJtbJxuZU8LnvrtDCBVl3rLDZcltpkvm7hA7RAG_cropped_1123_1123_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/OfdW4xf6aPFbFCH1tbjtiw2CEYJ5UMpj1lHeGpCd_cropped_1122_1122_widened_900.jpg",
      price: 85000,
    },
  ],
  Beds: [
    {
      id: 1,
      title: "BED SIMPLE",
      type: "BEDS",
      t: "Beds",
      image:
        "https://api.woodfans.ru/storage/uploads/images/XzxEiQ1KGrLBWYm7NBwsNf6f5n8QvC0pKkA7esGW_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/153WIcT8EWeyhP5ExZ7WxmWPYOv7gZEEQr1BxVN7_cropped_1280_1275_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/Bguo5fqhRoMbJKomfxAYvYWZnbMG71zUvGftZbbr_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/rTLuhMHwEBzatjlE1q9eFigPIkhKpTGfqjiadDTN_widened_900.jpg",
      price: 165000,
    },
    {
      title: "BED JULE",
      type: "BEDS",
      t: "Beds",
      image:
        "https://api.woodfans.ru/storage/uploads/images/aIlK4XJDCqtf2mREWwpOEPkGJ5traikhD364pSya_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/5455pLR79mXf7GT8DfYTIsmUH39q40I4vxw1J5iy_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/mET1fgtezL2aTD1wuHY1ksXYWhAGmAz6Nfxpmcvo_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/aIlK4XJDCqtf2mREWwpOEPkGJ5traikhD364pSya_widened_900.jpg",
      price: "245000",
      id: 2,
    },
    {
      title: "BED MELANIA",
      type: "BEDS",
      t: "Beds",
      image:
        "https://api.woodfans.ru/storage/uploads/images/iD4hgIxckEoJsNHnpTYA5tqwAMNfRdzvUWOUEnOW_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/Xh1nK3sMp21CXueqIPaeDpLFwzXoC4p2uUksRhJG_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/rUWUDH6BfCnotaFDtuMw6YuKKxtUrorxcUKkyjz1_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/0RIl949LUOPFSpoASJ9MWMTTgorbdmxp5Nrmow3y_cropped_849_1280_widened_900.jpg",
      price: "265000",
      id: 3,
    },
    {
      title: "BED ALMA",
      type: "BEDS",
      t: "Beds",
      image:
        "https://api.woodfans.ru/storage/uploads/images/0RIl949LUOPFSpoASJ9MWMTTgorbdmxp5Nrmow3y_cropped_849_1280_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/oXwdJHXiaBLr4pWnoF986B8vmzteJhJOJoYCHuMS_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/Ejg0HCbXzjI4U8Ltsdel0ExoVoyzL3xvDrD2JBQx_cropped_1500_1483_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/TfE5kU1PaqwOIw6gxk87Ubonr81ItE9WFRNRMaSp_widened_900.jpg",
      price: "220000",
      id: 4,
    },
    {
      title: "BED PLETENKA",
      type: "BEDS",
      t: "Beds",
      image:
        "https://api.woodfans.ru/storage/uploads/images/6W8e4agcOKdJZX96AUDyi57FbCCj5Ljy6G0h2Lgo_cropped_1498_1500_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/dExaRQoic2Ju3U3hR42crYXIhsCtfF9VOg7CnLnR_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/5oy3EtnekqKoYp23RQpzadI7JfGtPmbsppDKV4QK_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/6W8e4agcOKdJZX96AUDyi57FbCCj5Ljy6G0h2Lgo_cropped_1498_1500_widened_900.jpg",
      price: "235000",
      id: 5,
    },
  ],
  ChildrenFurniture: [
    {
      title: "CHILDREN'S BED SOFTY",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/7XiqaLWd8wcVNeAzyvS0bQhuPCOQmQm7oahZ1Ui1_cropped_1399_1400_widened_900.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/HzDuuGDW17elFh8sBiiIVUNXYcVhcdbJ7ZEfkZXy_widened_900.webp",
      url2: "https://api.woodfans.ru/storage/uploads/images/DONUtNuHgR1phWQjzB4O8AhTbj6kzvpkVIKvtbsg_widened_900.webp",
      url3: "https://api.woodfans.ru/storage/uploads/images/7C8NbbmR6NqDB5PGX0QffqwYp524n1zyqYKIWZQ9_widened_900.webp",
      price: "130000",
      id: 1,
    },
    {
      title: "CHILDREN'S BED CLOUD",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/oSx9eHc1pmCEGEl1VE8vuBrSUwQLddCjr28gT88x_widened_900.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/OoxrvASsOEMUgUa8lRzepDVlvrdj0yJzDiavg9EN_widened_900.webp",
      url2: "https://api.woodfans.ru/storage/uploads/images/5EXjQBnrNKFdp0u1Ya940UMb2l3SSVUoYXzk4OdQ_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/GopQw8WTofWxK2eVTZcPtk2jE76TzWRmpYEe7qXS_widened_900.jpg",
      price: "10000",
      id: 2,
    },
    {
      title: "CHILDREN'S BED SEA",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/NSjdh0TGxEKIhTrxQ0aVukmzoWc58XEiWx6W7U18_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/LQllvgiBLyucRJPDn8QxNU07vey3gXN97BE22gUK_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/WWFqeKq7Hvaf6r7Y2s1pc4pfo2Z6F4y9uFhmo7UM_cropped_948_952_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/NSjdh0TGxEKIhTrxQ0aVukmzoWc58XEiWx6W7U18_widened_900.jpg",
      price: "10000",
      id: 3,
    },
    {
      title: "BABY BED ROBBY",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/6KgCwudmuJpMvaoln9aozEklvrn9EbQu7BInLbZW_widened_900.png",
      url1: "https://api.woodfans.ru/storage/uploads/images/agPg2ECGD6oxT6ERs7MuGPoq1kZdcxVZLVwaAU2B_widened_900.png",
      url2: "https://api.woodfans.ru/storage/uploads/images/6KgCwudmuJpMvaoln9aozEklvrn9EbQu7BInLbZW_widened_900.png",
      url3: "https://api.woodfans.ru/storage/uploads/images/agPg2ECGD6oxT6ERs7MuGPoq1kZdcxVZLVwaAU2B_widened_900.png",
      price: "128000",
      id: 4,
    },
    {
      title: "BABY CHAIR",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/MLISLOkWj1lULptnHzjjVL70nZRy3ZCoaTG0nw5p_cropped_4392_4392_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/39ZMG5fNp4NZOuCxatkUhFQHEFR5IqJKgFTTKRG1_widened_800.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/2PcbPL9rCDNVFIAf8be4zFDMyT71qmyPxzbYeR7n_widened_800.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/PYnZGKBnVTYRWwDNUIHcRcVe4Unk2aosoB7DJGEa_widened_800.jpg",
      price: "40000",
      id: 5,
    },
    {
      title: "CHILDREN'S BED BUFFY",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/5BkiiqKMObhRJeGEDYgZ1qhZU6B2pHcHWYNy4uq4_widened_900.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/RI38aztLEkGyStiqMzKF3GPt8DGtmKhn439aWB16_cropped_917_843_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/n1cyh4s2YnFeBe4doVC0Z3Ju7Xubp9adQnzfW7FO_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/NiAYKaDO3wvjm9r2PpR7Oh9HOr2JQSUfentunWG4_widened_900.jpg",
      price: "110000",
      id: 6,
    },
    {
      title: "CHILDREN'S CHAIR BUNNY",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/Bl4SpEhA7tcR911olEAluGUn2rChb7KT7QnYT9WU_widened_900.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/oP4Poyx2oMCRp0NDtdM7JqobtgKKmPfJ1TuXi9fn_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/pfzSVzSMSXEa7JytRz5uMfJ04DLrMKkfAaToKo8U_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/Bl4SpEhA7tcR911olEAluGUn2rChb7KT7QnYT9WU_widened_900.jpg",
      price: "40000",
      id: 7,
    },
    {
      title: "CHILDREN'S CHAIR ANGEL",
      type: "Children's furniture",
      t: "ChildrenFurniture",
      image:
        "https://api.woodfans.ru/storage/uploads/images/abR8FmgqFjhdkSf1xXmNnm7tBI1pGjEp1BXswlMW_cropped_1000_998_widened_900.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/hpRzMcKszrcIi5QXEgMlennMydKu9IIM0XkxSyPi_widened_900.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/j4kP8p3MXYrLMuNVQErQV9AoWgFXYoB5xkG3ONrf_widened_900.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/tukEem8BO4dYjTs7DHyOSUHG5r1y8zMWQP6puDmU_widened_900.jpg",
      price: "40000",
      id: 8,
    },
  ],
  ArmChair: [
    {
      title: "BANQUETTE MADE OF SOLID",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/vJkPhZiU7v81PlxjnqcY4jsmXnWxJKEuUy2UgUQZ_widened_540.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/r5CL6Y8QVTZnBylItzKjGuodARG9VupVt1kAwzi3_widened_540.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/FnQIPM9rH56jmyEhqB6xsyD0kbREapfkKP23ysxv_widened_540.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/oc2lPjhjTIeaTxjj0YiC7B48C8w5B14B8wFeHA0A_cropped_1278_1279_widened_540.jpg",
      price: "65000",
      id: 1,
    },
    {
      title: "POUF CURVE",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/X1nlKgODlDigtd42ANZH64N0sqxb8ArcMGe8w8WP_widened_540.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/TeJxW3uDj9rbKYXHmuRwuxrYHooRxXSFncSHmxmT_widened_540.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/YwhcOmDKnYO7LDAdoSYX4EP9BOVEekHlj9k1rZlu_cropped_1279_1280_widened_540.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/3eC4iFezPJzJg7hAeJCENc9KC5Gn2cfTJgolUd40_widened_540.jpg",
      price: "50000",
      id: 2,
    },
    {
      title: "ARMCHAIR TWIGGY",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/oVKPEhZSxmpkFIH0tADZT0whaekGO7HrzeYQKZTy_cropped_2173_2000_widened_540.png",
      url1: "https://api.woodfans.ru/storage/uploads/images/GIDToVzZDwnsemDjPABeOli4ltFLL8ye6DAcVplM_cropped_2150_2000_widened_540.png",
      url2: "https://api.woodfans.ru/storage/uploads/images/AaIZJw2LrqoY3CqJ8A5YRjnQhSWH92SrPSsugGZw_cropped_2780_2000_widened_540.png",
      url3: "https://api.woodfans.ru/storage/uploads/images/oVKPEhZSxmpkFIH0tADZT0whaekGO7HrzeYQKZTy_cropped_2173_2000_widened_540.png",
      price: "95000",
      id: 3,
    },
    {
      title: "BENCH SFERA",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/J5AiKjkpASm1Rz2Sv4pcrvtUSnmJB7sw9BGOYDbC_widened_540.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/6SPrWlnJlQxnfy0Cf70dIL4P9cOpzMl9jai2O2TY_cropped_2052_2000_widened_540.png",
      url2: "https://api.woodfans.ru/storage/uploads/images/ofcc0U12lUbqhP0reiWUbHR0vQ94tKy5e8uYYMhx_cropped_2113_2000_widened_540.png",
      url3: "https://api.woodfans.ru/storage/uploads/images/J5AiKjkpASm1Rz2Sv4pcrvtUSnmJB7sw9BGOYDbC_widened_540.jpg",
      price: "85000",
      id: 4,
    },
    {
      title: "POUF CUBE",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/oT38UlUPk0js4uqIaSrQlLwQwhAP50LzEE4ZQoTS_widened_540.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/hNs08MoaiKk3OZlklsnqunr7aYQcVVTXJsBkwr6s_widened_540.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/oT38UlUPk0js4uqIaSrQlLwQwhAP50LzEE4ZQoTS_widened_540.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/hNs08MoaiKk3OZlklsnqunr7aYQcVVTXJsBkwr6s_widened_540.jpg",
      price: "140000",
      id: 5,
    },
    {
      title: "POUF TRIPOD",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/a5SJWIWqQVjfcqaDEUSBqSP7Fh9yXQ60Aam3zDew_widened_540.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/2GWJDlcJVHEGJy9ACG5zPGkf18XS1if7FuHg4Lkw_widened_540.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/ChiY8HjDlDGZNGqOgBjjU2SK1vMuetWXJ2VUTIex_widened_540.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/kiVackRSd71v8nXZAOhZaTuVrkpQai0tDMMNbKCt_widened_540.jpg",
      price: "35000",
      id: 6,
    },
    {
      title: "ARMCHAIR MOONLIGHT",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/hbAzGbwhcNpF9Pmrr4OF8kZX6hHjHi3kdSUHKCYY_widened_540.jpg",
      url1: "https://api.woodfans.ru/storage/uploads/images/7RS4zEFf9s4wYmHft0rOu6iuDAXRBv9Dxrt1I8HX_widened_540.jpg",
      url2: "https://api.woodfans.ru/storage/uploads/images/3mqolCGDmf2AmPQ8bQRQ2NfskQHSpk5ISYbeenwA_widened_540.jpg",
      url3: "https://api.woodfans.ru/storage/uploads/images/vP789utXYEfvDHUwTHHCQk07VU4WZveZb8DmnjGW_widened_540.jpg",
      price: "65000",
      id: 7,
    },
    {
      title: "LLAMA FUR CHAIR",
      type: "Armchairs and poufs",
      t: "ArmChair",
      image:
        "https://api.woodfans.ru/storage/uploads/images/xm5MB9izJWBozqaEYYqJ7vH5j6bNQno9ltsGCNHM_cropped_1800_1790_widened_540.webp",
      url1: "https://api.woodfans.ru/storage/uploads/images/UmaPHDlW1aDJm3GNgVfZ57pb4vq0ZrQRV9qyKkiz_widened_540.webp",
      url2: "https://api.woodfans.ru/storage/uploads/images/TD7seJcC0GnwNmvTEyz5wM8pGbfU0AwI9uk2VhZx_cropped_3952_3873_widened_540.webp",
      url3: "https://api.woodfans.ru/storage/uploads/images/enbbf8b4hJ1iKXGEN1V9ZNqN2cx2V2KH1pajXyrw_cropped_3812_3769_widened_540.webp",
      price: "12000",
      id: 8,
    },
  ],
};

const SearchData = (key) => {
  let arr = [];
  if (key != "") {
    for (let group in data) {
      let fil = data[group].filter((e) => {
        let t = e.title.toLowerCase();
        let k = key.toLowerCase();
        return t.includes(k);
      });
      //   console.log(arr);
      arr = [...arr, ...fil];
    }
  }
  return arr;
};
SearchData("bed");
export default SearchData;
