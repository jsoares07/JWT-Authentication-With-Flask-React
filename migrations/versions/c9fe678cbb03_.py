"""empty message

Revision ID: c9fe678cbb03
Revises: 20314c320261
Create Date: 2022-07-21 13:56:33.351577

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c9fe678cbb03'
down_revision = '20314c320261'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('username', sa.String(length=200), nullable=False))
    op.alter_column('user', 'email',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=200),
               existing_nullable=False)
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=9000),
               existing_nullable=False)
    op.create_unique_constraint(None, 'user', ['username'])
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'user', type_='unique')
    op.alter_column('user', 'password',
               existing_type=sa.String(length=9000),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('user', 'email',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.drop_column('user', 'username')
    # ### end Alembic commands ###
