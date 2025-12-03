import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Demo kullanıcı oluştur
  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Demo Kullanıcı',
    },
  })

  // Varsayılan alışkanlıklar (Türkçe)
  const defaultHabits = [
    'Su İç',
    'Egzersiz Yap',
    'İngilizce Çalış',
    'Kitap Oku',
  ]

  for (const habitName of defaultHabits) {
    await prisma.habit.upsert({
      where: {
        id: defaultHabits.indexOf(habitName) + 1,
      },
      update: { name: habitName },
      create: {
        name: habitName,
        userId: user.id,
      },
    })
  }

  console.log('✅ Veritabanı başarıyla oluşturuldu!')
  console.log(`   Kullanıcı: ${user.name}`)
  console.log(`   Alışkanlıklar: ${defaultHabits.join(', ')}`)
}

main()
  .catch((e) => {
    console.error('Veritabanı oluşturma hatası:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
